import Link from "next/link";
import FashionList from "@/app/_components/Fashion/List";
import Paginations from "@/app/_components/Pagination/Pagination";
import SubMenuList from "@/app/_components/Menu/SubMenuList";

import { links } from "@/app/_utils/_data/linksData";

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
    <>
      <SubMenuList className="mb-2 mt-2 flex h-8 justify-end">
        {subMenu}
      </SubMenuList>

      <FashionList />

      <Paginations route="fashion" query="page" totalPage={100} />
    </>
  );
}
