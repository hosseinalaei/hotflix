import Menu from "./Menu";
import Logo from "../../../assets/images/logo/logo.svg";
import Image from "next/image";
import Search from "./Search";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-8 border-b border-slate-500">
      <div className="flex flex-col md:grid md:grid-cols-3 container mx-auto gap-2">
        <div className="mx-auto md:mx-0">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              width={100}
              height={50}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex justify-center gap-5">
          <Menu />
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
