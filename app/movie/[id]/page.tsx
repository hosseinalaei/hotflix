"use client";
import { useQuery } from "@tanstack/react-query";
import { apiConfig } from "../../api/api";
import { useParams } from "next/navigation";
// import CategoriCard from "../../components/CategoriCard";
// import Video from "next-video";
import Player from "next-video/player";
import Image from "next/image";
import Accordion from "@/app/_components/Accordian/Accordian";
import { useState } from "react";
import Loading from "@/app/_components/Loading/Loading";

interface Categories {
  id: number;
  title: string;
}

interface Source {
  id: number;
  quality: string;
  type: string;
  url: string;
}

const MoviePage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const res = await apiConfig.get(`/movie/${id}`);
      return res?.data;
    },
  });

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
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (url: any) => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoading) return <Loading />;
  if (isError) return <p>Error fetching movies 😢</p>;

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${data.cover})`,
        width: "100%",
        height: "auto",
      }}
    >
      <div className="backdrop-blur-sm bg-slate-800/60 min-h-screen">
        <div className="container mx-auto py-10">
          <div className="flex flex-col md:flex-row my-6 gap-4 px-2">
            <div className="w-full md:w-1/3">
              <Image
                alt="movie image"
                src={data.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              />
            </div>
            <div className="flex flex-col w-full md:w-2/3">
              <h1 className="text-[30px] font-bold text-white">{data.title}</h1>
              <div className="whitespace-pre-line">{data.description}</div>
            </div>
          </div>

          {data.sources.length > 0 &&
            data.sources.map((item: any) => {
              return (
                <div className="my-2 px-2" key={item.id}>
                  <Accordion title={item.quality}>
                    <>
                      <div className="flex gap-2 items-center">
                        لینک دانلود:
                        <div className="bg-slate-800 p-2 my-2 rounded-md">
                          <button
                            onClick={() => copyToClipboard(item.url)}
                            className="ml-2 p-1 hover:bg-slate-700 rounded transition"
                          >
                            {copied ? <CheckIcon /> : <CopyIcon />}
                          </button>
                          {item.url}
                        </div>
                      </div>
                      <span style={{ direction: "ltr" }}>
                        {/* <Player src={item.url} /> */}

                        <video
                          width="100%"
                          height="100%"
                          controls
                          preload="none"
                        >
                          <source src={item.url} type="video/mp4" />
                          <track
                            src="/path/to/captions.vtt"
                            kind="subtitles"
                            srcLang="en"
                            label="English"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </span>
                    </>
                  </Accordion>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
