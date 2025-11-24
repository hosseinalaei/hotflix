import Image from "next/image";
import Link from "next/link";

const SearchCard = ({ poster, id, title }: any) => {
  return (
    <Link href={`/movie/${id}`}>
      <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
        <Link href={`/movie/${id}`}>
          <Image
            className="rounded-t-base"
            src={poster}
            alt="moivie image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </Link>
        <div className="p-6 text-center">
          <h5 className="mt-3 mb-6 text-2xl font-semibold text-slate-800">
            {title}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
