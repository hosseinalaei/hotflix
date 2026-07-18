import http from "http";
import https from "https";
import { NextRequest, NextResponse } from "next/server";
import type { IncomingMessage } from "http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const fetchUpstream = (
  targetUrl: string,
  reqHeaders: Record<string, string>,
  redirectCount = 0,
): Promise<{ res: IncomingMessage; finalUrl: string }> =>
  new Promise((resolve, reject) => {
    if (redirectCount > 5) {
      reject(new Error("Too many redirects"));
      return;
    }

    const parsed = new URL(targetUrl);
    const lib = parsed.protocol === "https:" ? https : http;

    const request = lib.request(
      {
        protocol: parsed.protocol,
        hostname: parsed.hostname,
        port: parsed.port || (parsed.protocol === "https:" ? 443 : 80),
        path: `${parsed.pathname}${parsed.search}`,
        method: "GET",
        headers: reqHeaders,
        timeout: 30000,
      },
      (res) => {
        const status = res.statusCode || 0;
        const location = res.headers.location;

        if ([301, 302, 303, 307, 308].includes(status) && location) {
          const nextUrl = new URL(location, targetUrl).toString();
          res.resume();
          fetchUpstream(nextUrl, reqHeaders, redirectCount + 1)
            .then(resolve)
            .catch(reject);
          return;
        }

        resolve({ res, finalUrl: targetUrl });
      },
    );

    request.on("timeout", () => {
      request.destroy();
      reject(new Error("Upstream timeout"));
    });
    request.on("error", reject);
    request.end();
  });

export async function GET(request: NextRequest) {
  const target = request.nextUrl.searchParams.get("url");

  if (!target) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }

  let parsed: URL;
  try {
    parsed = new URL(target);
  } catch {
    return NextResponse.json({ error: "Invalid url" }, { status: 400 });
  }

  if (!["http:", "https:"].includes(parsed.protocol)) {
    return NextResponse.json({ error: "Unsupported protocol" }, { status: 400 });
  }

  const headers: Record<string, string> = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept: "*/*",
    "Accept-Encoding": "identity",
    Connection: "keep-alive",
    Referer: `${parsed.origin}/`,
    Host: parsed.host,
  };

  const range = request.headers.get("range");
  if (range) headers.Range = range;

  try {
    const { res } = await fetchUpstream(parsed.toString(), headers);
    const status = res.statusCode || 502;

    if (status >= 400 && status !== 416) {
      res.resume();
      return NextResponse.json(
        { error: "Upstream error", status },
        { status },
      );
    }

    const responseHeaders = new Headers();
    const contentType = res.headers["content-type"] || "video/mp4";
    responseHeaders.set("Content-Type", Array.isArray(contentType) ? contentType[0] : contentType);
    responseHeaders.set("Accept-Ranges", "bytes");
    responseHeaders.set("Cache-Control", "public, max-age=3600");
    responseHeaders.set("Access-Control-Allow-Origin", "*");
    responseHeaders.set("Access-Control-Expose-Headers", "Content-Length, Content-Range, Accept-Ranges");

    for (const key of ["content-length", "content-range"] as const) {
      const value = res.headers[key];
      if (value) {
        responseHeaders.set(
          key === "content-length" ? "Content-Length" : "Content-Range",
          Array.isArray(value) ? value[0] : value,
        );
      }
    }

    const stream = new ReadableStream({
      start(controller) {
        res.on("data", (chunk) => controller.enqueue(chunk));
        res.on("end", () => controller.close());
        res.on("error", (err) => controller.error(err));
      },
      cancel() {
        res.destroy();
      },
    });

    return new NextResponse(stream, { status, headers: responseHeaders });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch video";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Range, Content-Type",
      "Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges",
    },
  });
}
