import Menu from "./Menu";
import Logo from "../../../assets/images/logo/logo.svg";
import Image from "next/image";
import Search from "./Search";

const Header = () => {
  return (
    <div className="py-8 border-b border-slate-500">
      <div className="grid grid-cols-3 container mx-auto">
        <Image src={Logo} alt="logo" width={100} height={50} />
        <div className="flex justify-center gap-10">
          <Menu />
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Header;
