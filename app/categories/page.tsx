"use client";
import { useQuery } from "@tanstack/react-query";
import { apiConfig } from "../api/api";
import Link from "next/link";
import Loading from "../_components/Loading/Loading";
import Skeleton from "../_components/Skeleton/Skeleton";
import Button from "../_components/Button/Button";
// import CategoriCard from "../../components/CategoriCard";

interface Categories {
  id: number;
  title: string;
}
const CategoriesPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["id"],
    queryFn: async () => {
      const res = await apiConfig.get(`/genre`);
      return res?.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>Error fetching categories 😢</p>;
  if (data.length === 0) return <p>there is no data...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 container mx-auto gap-4 my-10">
      {data?.map((item: Categories) => {
        return (
          <Link href={`/categories/${item.id}`} key={item.id}>
            {/* <div className="border border-amber-300 rounded-md flex justify-center py-4">
            </div> */}
            <Button>{item.title}</Button>
          </Link>
        );
        // return <CategoriCard title={item.name} key={item.id} />;
      })}
    </div>
  );
};

export default CategoriesPage;
