"use client";

import Link from "next/link";

import Item from "./Item";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import ErrorWrapper from "../Error/ErrorWrapper";

import { useFashionList } from "@/app/_hooks/useFashionMethods";

export default function List({ tag }: { tag: string }) {
  const { data, isLoading } = useFashionList();

  if (isLoading) return <LoadingSpinner />;
  if (data?.length === 0 || !data) {
    return (
      <ErrorWrapper>
        <span>등록된 글이 없습니다.</span>
      </ErrorWrapper>
    );
  }

  return (
    <ul className="grid grid-cols-2 justify-items-center gap-4 p-6 lg:grid-cols-4 xl:grid-cols-6">
      {data?.map((item) => (
        <li key={item.id} className=" h-80 w-full ">
          <Link href={`/detail/${tag}/${item.id}`}>
            <Item {...item} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
