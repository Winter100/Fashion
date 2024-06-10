"use client";

import { ListItemType } from "@/app/_types/type";
import ItemEntry from "../ItemEntry";
import LoadingSpinner from "../../Spinner/LoadingSpinner";
import ErrorWrapper from "../../Error/ErrorWrapper";
import { useReadSearch } from "@/app/_hooks/useFashion";
import { useQueryString } from "@/app/_hooks/useQueryString";

export default function SearchFashionList() {
  const { data: SearchData, isLoading } = useReadSearch<ListItemType>();
  const { q } = useQueryString();

  if (isLoading) return <LoadingSpinner />;
  if (SearchData?.length === 0 || !SearchData) {
    return (
      <ErrorWrapper className="flex h-full w-full cursor-default flex-col items-center justify-center text-center text-5xl">
        <p className="my-2">등록된 기록이 없습니다.</p>
        <div className=" text-2xl">
          <p>검색어: {q}</p>
        </div>
      </ErrorWrapper>
    );
  }

  return <ItemEntry data={SearchData} type="search" />;
}
