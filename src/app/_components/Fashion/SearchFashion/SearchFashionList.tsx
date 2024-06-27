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
      <ErrorWrapper>
        <p className="text-2xl">검색어: {q}</p>
      </ErrorWrapper>
    );
  }

  return <ItemEntry data={SearchData} type="search" />;
}
