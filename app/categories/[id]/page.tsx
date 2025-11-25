"use client";
import { useQuery } from "@tanstack/react-query";
import { apiConfig } from "../../api/api";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
// import CategoriCard from "../../components/CategoriCard";

interface Categories {
  id: number;
  title: string;
  image: string;
}

const CategoriesPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movie", id],
    queryFn: async () => {
      const res = await apiConfig.get(`/category/${id}/sortby/created/1`);
      return res?.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching movies 😢</p>;

  console.log(data);

  return (
    <div className="grid grid-cols-6 gap-4 container mx-auto my-10">
      {data?.map((item: Categories) => {
        return (
          <Link href={`/movie/${item.id}`} key={item.id}>
            <div className="flex flex-col items-center">
              <Image
                src={item.image}
                alt="movie image"
                width={200}
                height={400}
                // style={{ width: "100%", height: "auto" }}
              />
              <p>{item.title}</p>
            </div>
          </Link>
        );
        // return <CategoriCard title={item.name} key={item.id} />;
      })}
    </div>
  );
};

export default CategoriesPage;
