"use client";

import Link from "next/link";

import Item from "./Item";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import useFashion from "@/app/_hooks/useFashion";

export default function List() {
  const { data, isLoading } = useFashion();

  if (isLoading) return <LoadingSpinner />;

  return (
    <ul className="grid h-full w-full grid-cols-2 justify-items-center gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {data?.map((item) => (
        <li key={item.id} className=" h-80 w-full ">
          <Link href={`/fashion/detail/${item.id}`}>
            <Item {...item} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
