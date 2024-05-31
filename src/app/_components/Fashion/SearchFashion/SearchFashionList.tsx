"use client";

import { useSearchFashion } from "@/app/_hooks/useFashionMethods";
import { ListItemType } from "@/app/_types/type";
import ItemEntry from "../ItemEntry";
import LoadingSpinner from "../../Spinner/LoadingSpinner";
import ErrorWrapper from "../../Error/ErrorWrapper";

export default function SearchFashionList() {
  const { data: SearchData, isLoading } = useSearchFashion<ListItemType>();

  if (isLoading) return <LoadingSpinner />;
  if (SearchData?.length === 0 || !SearchData) {
    return (
      <ErrorWrapper>
        <span>등록된 기록이 없습니다.</span>
      </ErrorWrapper>
    );
  }

  return <ItemEntry data={SearchData} type="search" />;
}
