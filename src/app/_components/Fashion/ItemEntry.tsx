"use client";

import Link from "next/link";

import FashionItem from "./Fashion/FashionItem";
import SearchItem from "./SearchFashion/SearchItem";
import { ListItemType } from "@/app/_types/type";

export default function ItemEntry({
  data,
  type,
}: {
  data: ListItemType[];
  type: "fashion" | "search";
}) {
  const Item = type === "fashion" ? FashionItem : SearchItem;

  return (
    <ul className="grid grid-cols-2 justify-items-center gap-4 p-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8">
      {data?.map((item) => (
        <li key={item.id} className=" h-80 w-full ">
          <Link prefetch={false} href={`/detail/${item.tag}/${item.id}`}>
            <Item {...item} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
