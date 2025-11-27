import Link from "next/link";
const menuItems = [
  {
    id: 1,
    title: "خانه",
    path: "/",
  },
  {
    id: 2,
    title: "دسته بندی ها",
    path: "/categories",
  },
  // {
  //   id: 3,
  //   title: "Movies",
  //   path: "/",
  // },
  // {
  //   id: 4,
  //   title: "Series",
  //   path: "/",
  // },
];
const Menu = () => {
  return (
    <>
      {menuItems.map((item) => {
        return (
          <ul key={item.id}>
            <Link href={item.path}>
              <li className="cursor-pointer">{item.title}</li>
            </Link>
          </ul>
        );
      })}
    </>
  );
};

export default Menu;
