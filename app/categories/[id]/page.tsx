"use client";
import { useQuery } from "@tanstack/react-query";
import { apiConfig } from "../../api/api";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import ReactPaginate from "react-paginate";
// import CategoriCard from "../../components/CategoriCard";

interface Categories {
  id: number;
  title: string;
  image: string;
}

const CategoriesPage = () => {
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movie", id, page],
    queryFn: async () => {
      const res = await apiConfig.get(`/category/${id}/sortby/created/${page}`);
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
      <button onClick={() => setPage(page + 1)} className="cursor-pointer">
        next
      </button>
    </div>
  );
};

export default CategoriesPage;
