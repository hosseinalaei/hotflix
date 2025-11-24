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
    queryKey: ["movie"],
    queryFn: async () => {
      const res = await apiConfig.get(`/movie/${id}`);
      return res?.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching movies 😢</p>;
  console.log(data);

  return (
    <div className="container mx-auto">
      <h1 className="text-[40px]">{data.title}</h1>

      <div className="flex">
        <div className="w-1/2 flex gap-2">
          <Image
            alt="movie image"
            src={data.image}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "50%", height: "auto" }}
          />
          <div className="w-1/2 flex flex-col">
            <title>{data.title}</title>
            {/* <ul>
              {data.genres.map((item: any) => (
                <li key={item.it}>{item.title}</li>
              ))}
            </ul> */}
          </div>
        </div>

        {data?.sources[0]?.url && (
          <div className="w-1/2">
            <Player src={data?.sources[0]?.url} />
          </div>
        )}
      </div>

      {/* <div className="grid grid-cols-6">
        {data?.sources.map((item: Source) => {
          return (
            <div key={item.id} className="flex flex-col">
              {item.quality}
              <Player src={item.url} />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default MoviePage;
