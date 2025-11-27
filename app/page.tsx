"use client";
import { useQuery } from "@tanstack/react-query";
import { apiConfig } from "./api/api";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["genres"],
    queryFn: async () => {
      const res = await apiConfig.get(`/homefeed`);
      return res?.data;
    },
  });
  console.log(data);

  return (
    <main className="container mx-auto">
      <h1>Hotflix</h1>
    </main>
  );
}
