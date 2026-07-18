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

const VideoPlayer = ({ src, title, poster }: VideoPlayerProps) => {
  const [playableSrc, setPlayableSrc] = useState(src);

  useEffect(() => {
    try {
      const url = new URL(src);
      const pageIsHttps = window.location.protocol === "https:";

      if (pageIsHttps && url.protocol === "http:") {
        setPlayableSrc(`/api/stream?url=${encodeURIComponent(src)}`);
        return;
      }
    } catch {
      // keep original src
    }

    setPlayableSrc(src);
  }, [src]);

  if (!src) return null;

  return (
    <div
      className="my-3 w-full overflow-hidden rounded-xl bg-black aspect-video"
      dir="ltr"
    >
      <MediaPlayer
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
