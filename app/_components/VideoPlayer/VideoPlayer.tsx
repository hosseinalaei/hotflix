"use client";

import { useEffect, useState } from "react";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

type VideoPlayerProps = {
  src: string;
  title?: string;
  poster?: string;
};

const getProxyBase = () =>
  process.env.NEXT_PUBLIC_STREAM_PROXY_URL?.replace(/\/$/, "") || "/api/stream";

const toPlayableSrc = (src: string) => {
  try {
    const url = new URL(src);
    if (url.protocol !== "http:") return src;

    const pageIsHttps =
      typeof window !== "undefined" && window.location.protocol === "https:";

    // Only proxy on HTTPS pages (mixed content). Keep direct http on localhost.
    if (!pageIsHttps) return src;

    return `${getProxyBase()}?url=${encodeURIComponent(src)}`;
  } catch {
    return src;
  }
};

const VideoPlayer = ({ src, title, poster }: VideoPlayerProps) => {
  const [playableSrc, setPlayableSrc] = useState(src);

  useEffect(() => {
    setPlayableSrc(toPlayableSrc(src));
  }, [src]);

  if (!src) return null;

  return (
    <div
      className="my-3 w-full overflow-hidden rounded-xl bg-black aspect-video"
      dir="ltr"
    >
      <MediaPlayer
        key={playableSrc}
        title={title}
        src={{ src: playableSrc, type: "video/mp4" }}
        poster={poster}
        viewType="video"
        streamType="on-demand"
        playsInline
        load="eager"
        className="h-full w-full"
      >
        <MediaProvider />
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
};

export default VideoPlayer;
