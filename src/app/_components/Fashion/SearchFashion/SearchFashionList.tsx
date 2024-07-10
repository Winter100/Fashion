"use client";

import { ListItemType } from "@/app/_types/type";
import ItemEntry from "../ItemEntry";
import LoadingSpinner from "../../Spinner/LoadingSpinner";
import AlertWrapper from "../../Error/AlertWrapper";
import { useReadSearch } from "@/app/_hooks/useFashion";
import { useQueryString } from "@/app/_hooks/useQueryString";

export default function SearchFashionList() {
  const {
    data: SearchData,
    isLoading,
    isError,
    error,
    q,
  } = useReadSearch<ListItemType>();

  if (isLoading) return <LoadingSpinner />;

  if (SearchData?.length === 0 || !SearchData) {
    return (
      <AlertWrapper description="등록된 기록이 없습니다.">
        <p className="text-2xl">검색어: {q}</p>
      </AlertWrapper>
    );
  }

  if (isError) {
    return (
      <AlertWrapper description="에러가 발생했습니다.">
        <p className="text-2xl">{error?.message}</p>
      </AlertWrapper>
    );
  }

  return <ItemEntry data={SearchData} type="search" />;
}
