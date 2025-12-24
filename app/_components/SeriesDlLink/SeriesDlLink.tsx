import { apiConfig } from "@/app/api/api";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";
import Accordion from "../Accordian/Accordian";
import { useEffect, useState } from "react";
import Player from "next-video/player";
type Props = {
  id: any;
};
const SeriesDlLink: React.FC<Props> = ({ id }) => {
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState<any>({});

  //   const { isLoading, isError, data } = useQuery({
  //     queryKey: [id],
  //     queryFn: async () => {
  //       const res = await apiConfig.get(`/serial/${id}/seasons`);
  //       return res?.data;
  //     },
  //   });
  //   console.log("series", data);

  const fetchSeriesLink = async () => {
    try {
      const res = await apiConfig.get(`/serial/${id}/seasons`);
      setData(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchSeriesLink();
  }, [id]);

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

  const copyToClipboard = async (url: any) => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  //   if (isLoading) return <Loading />;
  //   if (isError) return <p>Error fetching movies 😢</p>;

  return (
    <>
      {data?.length > 0 &&
        data?.map((item: any) => {
          return (
            <div className="my-2 px-2" key={item.id}>
              <Accordion title={item.title}>
                <>
                  {/* <div className="flex gap-2 items-center">
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
                    <Player src={item.url} />
                  </span> */}
                  {item.episodes.map((episode: any) => {
                    return (
                      <Accordion title={episode.title} key={episode.title}>
                        {episode.sources.map((item: any) => {
                          return (
                            <Accordion title={item.quality} key={item.id}>
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
                                <Player src={item.url} />
                              </span>
                            </Accordion>
                          );
                        })}
                      </Accordion>
                    );
                  })}
                </>
              </Accordion>
            </div>
          );
        })}
    </>
  );
};

export default SeriesDlLink;
