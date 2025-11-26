"use client";
import { useQuery } from "@tanstack/react-query";
import { apiConfig } from "../../api/api";
import { useParams } from "next/navigation";
// import CategoriCard from "../../components/CategoriCard";
// import Video from "next-video";
import Player from "next-video/player";
import Image from "next/image";

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

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching movies 😢</p>;
  console.log(data);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${data.cover})`,
        width: "100%",
        height: "auto",
      }}
    >
      <div className="backdrop-blur-sm bg-slate-200/20 min-h-screen">
        <div className="container mx-auto py-10">
          <h1 className="text-[40px] font-bold text-white">{data.title}</h1>

          <div className="flex mt-6">
            <div className="w-1/2 flex gap-2">
              <Image
                alt="movie image"
                src={data.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "50%", height: "auto" }}
              />

              <div className="w-1/2 flex flex-col text-white">
                <title>{data.title}</title>
              </div>
            </div>

            {data?.sources[0]?.url && (
              <div className="w-1/2">
                <Player src={data?.sources[0]?.url} />
                <video width="320" height="240" controls preload="none">
                  <source src={data?.sources[0]?.url} type="video/mp4" />
                  <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
