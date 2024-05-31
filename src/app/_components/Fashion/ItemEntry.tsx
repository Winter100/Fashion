"use client";

import Link from "next/link";

import FashionItem from "./TagFashion/FashionItem";
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
    <ul className="grid grid-cols-2 justify-items-center gap-4 p-6 lg:grid-cols-4 xl:grid-cols-6">
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
