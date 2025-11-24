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
    <main>
      <h1>aaaaa</h1>
    </main>
  );
}
