import Image from "next/image";
import Link from "next/link";

const SearchCard = ({ poster, id, title, closeModal }: any) => {
  return (
    <Link href={`/movie/${id}`} onClick={() => closeModal(false)}>
      <div className="my-2 bg-neutral-primary-soft block max-w-sm border border-default rounded-b-md shadow-xs">
        <Link href={`/movie/${id}`}>
          <Image
            className="rounded-t-md"
            src={poster}
            alt="moivie image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </Link>
        <div className="p-2 text-center">
          <h5 className="font-semibold text-slate-800">{title}</h5>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
