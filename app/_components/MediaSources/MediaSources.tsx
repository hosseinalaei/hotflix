"use client";

import { useEffect, useState } from "react";
import { apiConfig } from "@/app/api/api";
import Accordion from "../Accordian/Accordian";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

type Source = {
  id: number;
  quality: string;
  type?: string;
  url: string;
};

type Props = {
  id: string | string[] | undefined;
  type?: string;
  title?: string;
  poster?: string;
  sources?: Source[];
};

const CopyIcon = () => (
  <svg
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    viewBox="0 0 24 24"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const SourceItem = ({
  source,
  title,
  poster,
}: {
  source: Source;
  title?: string;
  poster?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(source.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Accordion title={source.quality}>
      <div className="flex gap-2 items-center">
        لینک دانلود:
        <div className="bg-slate-800 p-2 my-2 rounded-md break-all">
          <button
            onClick={copyToClipboard}
            className="ml-2 p-1 hover:bg-slate-700 rounded transition"
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </button>
          {source.url}
        </div>
      </div>
      <VideoPlayer src={source.url} title={title} poster={poster} />
    </Accordion>
  );
};

const MediaSources = ({ id, type, title, poster, sources = [] }: Props) => {
  const [seasons, setSeasons] = useState<any[]>([]);
  const isSerie = type === "serie";

  useEffect(() => {
    if (!isSerie || !id) return;

    const fetchSeasons = async () => {
      try {
        const res = await apiConfig.get(`/serial/${id}/seasons`);
        setSeasons(res.data || []);
      } catch (e) {
        console.log(e);
      }
    };

    fetchSeasons();
  }, [id, isSerie]);

  if (isSerie) {
    if (!seasons?.length) return null;

    return (
      <>
        {seasons.map((season: any) => (
          <div className="my-2 px-2" key={season.id}>
            <Accordion title={season.title}>
              {season.episodes?.map((episode: any) => (
                <Accordion title={episode.title} key={episode.title}>
                  {episode?.sources?.map((source: Source) => (
                    <div className="my-2" key={source.id}>
                      <SourceItem
                        source={source}
                        title={episode.title}
                        poster={poster}
                      />
                    </div>
                  ))}
                </Accordion>
              ))}
            </Accordion>
          </div>
        ))}
      </>
    );
  }

  if (!sources?.length) return null;

  return (
    <>
      {sources.map((source) => (
        <div className="my-2 px-2" key={source.id}>
          <SourceItem source={source} title={title} poster={poster} />
        </div>
      ))}
    </>
  );
};

export default MediaSources;
