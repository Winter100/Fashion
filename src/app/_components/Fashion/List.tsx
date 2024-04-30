"use client";

import Link from "next/link";

import Item from "./Item";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import useFashion from "@/app/_hooks/useFashion";

export default function List() {
  const { data, isLoading } = useFashion();

  if (isLoading) return <LoadingSpinner />;

  return (
    <ul className=" grid grid-cols-2 justify-items-center gap-3 p-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {data?.map((item) => (
        <li key={item.id} className="w-full">
          <Link href={`/fashion/detail/${item.id}`}>
            <Item {...item} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
