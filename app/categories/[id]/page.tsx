"use client";
import { useQuery } from "@tanstack/react-query";
import { apiConfig } from "../../api/api";
import Link from "next/link";
import { useParams } from "next/navigation";
// import CategoriCard from "../../components/CategoriCard";

interface Categories {
  id: number;
  title: string;
}
const CategoriesPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await apiConfig.get(`/category/${id}/sortby/created/1`);
      return res?.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching movies 😢</p>;

  console.log(data);

  return (
    <div className="grid grid-cols-6">
      {data?.map((item: Categories) => {
        return (
          <Link href={`/movie/${item.id}`} key={item.id}>
            <p>{item.title}</p>
          </Link>
        );
        // return <CategoriCard title={item.name} key={item.id} />;
      })}
    </div>
  );
};

export default CategoriesPage;
