/**
 * Deploy this on your Iranian API server (movie.one-dev.ir),
 * then set Vercel env:
 * NEXT_PUBLIC_STREAM_PROXY_URL=https://movie.one-dev.ir/stream
 *
 * Run: node stream-proxy/server.mjs
 * Or put it behind Caddy on path /stream
 */
import http from "http";
import https from "https";
import { URL } from "url";

const PORT = Number(process.env.PORT || 8787);

const fetchUpstream = (targetUrl, headers, redirectCount = 0) =>
  new Promise((resolve, reject) => {
    if (redirectCount > 5) {
      reject(new Error("Too many redirects"));
      return;
    }

    const parsed = new URL(targetUrl);
    const lib = parsed.protocol === "https:" ? https : http;

    const req = lib.request(
      {
        protocol: parsed.protocol,
        hostname: parsed.hostname,
        port: parsed.port || (parsed.protocol === "https:" ? 443 : 80),
        path: `${parsed.pathname}${parsed.search}`,
        method: "GET",
        headers,
        timeout: 30000,
      },
      (res) => {
        const status = res.statusCode || 0;
        const location = res.headers.location;
        if ([301, 302, 303, 307, 308].includes(status) && location) {
          res.resume();
          fetchUpstream(new URL(location, targetUrl).toString(), headers, redirectCount + 1)
            .then(resolve)
            .catch(reject);
          return;
        }
        resolve(res);
      },
    );

    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Upstream timeout"));
    });
    req.on("error", reject);
    req.end();
  });

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Range, Content-Type");
  res.setHeader(
    "Access-Control-Expose-Headers",
    "Content-Length, Content-Range, Accept-Ranges",
  );

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  try {
    const reqUrl = new URL(req.url || "/", `http://${req.headers.host}`);
    const target = reqUrl.searchParams.get("url");

    if (!target) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Missing url" }));
      return;
    }

    const parsed = new URL(target);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Unsupported protocol" }));
      return;
    }

    const headers = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "*/*",
      "Accept-Encoding": "identity",
      Referer: `${parsed.origin}/`,
      Host: parsed.host,
    };

    if (req.headers.range) headers.Range = req.headers.range;

    const upstream = await fetchUpstream(parsed.toString(), headers);
    const status = upstream.statusCode || 502;

    if (status >= 400 && status !== 416) {
      upstream.resume();
      res.writeHead(status, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Upstream error", status }));
      return;
    }

    const outHeaders = {
      "Content-Type": upstream.headers["content-type"] || "video/mp4",
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=3600",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers":
        "Content-Length, Content-Range, Accept-Ranges",
    };

    if (upstream.headers["content-length"]) {
      outHeaders["Content-Length"] = upstream.headers["content-length"];
    }
    if (upstream.headers["content-range"]) {
      outHeaders["Content-Range"] = upstream.headers["content-range"];
    }

    res.writeHead(status, outHeaders);
    upstream.pipe(res);
  } catch (error) {
    res.writeHead(502, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Failed to fetch video",
      }),
    );
  }
});

server.listen(PORT, () => {
  console.log(`Video stream proxy listening on :${PORT}`);
});
