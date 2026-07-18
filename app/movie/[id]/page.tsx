"use client";
import { useQuery } from "@tanstack/react-query";
import { apiConfig } from "../../api/api";
import { useParams } from "next/navigation";
import Image from "next/image";
import Loading from "@/app/_components/Loading/Loading";
import MediaSources from "@/app/_components/MediaSources/MediaSources";

const MoviePage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const res = await apiConfig.get(`/movie/${id}`);
      return res?.data;
    },
  });

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

          <MediaSources
            id={id}
            type={data.type}
            title={data.title}
            poster={data.cover}
            sources={data.sources}
          />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
