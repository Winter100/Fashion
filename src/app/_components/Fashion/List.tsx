"use client";

import Link from "next/link";

import Item from "./Item";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import useFashion from "@/app/_hooks/useFashion";

export default function List() {
  const { data, isLoading } = useFashion();

  if (isLoading) return <LoadingSpinner />;

  return (
    <ul className=" grid grid-cols-4 grid-rows-3 gap-2 ">
      {data?.map((item) => (
        <Link href={`/fashion/detail/${item.id}`} key={item.id}>
          <Item {...item} />
        </Link>
      ))}
    </ul>
  );
}
