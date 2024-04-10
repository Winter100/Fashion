import Link from "next/link";

import { links } from "./_data/linksData";

import FashionList from "@/app/_components/Fashion/List";
import Paginations from "@/app/_components/Pagination/Pagination";
import SubMenuList from "@/app/_components/Menu/SubMenuList";

const subMenu = links.map((menu) => (
  <Link
    className="cursor-pointer text-2xl hover:font-bold"
    key={menu.title}
    href={menu.href}
  >
    {menu.title}
  </Link>
));

export default function Page() {
  return (
    <div className="h-full">
      <SubMenuList>{subMenu}</SubMenuList>

      <FashionList />

      <Paginations route="fashion" query="page" totalPage={100} />
    </div>
  );
}
