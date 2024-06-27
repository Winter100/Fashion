"use client";

import ItemEntry from "../ItemEntry";
import LoadingSpinner from "../../Spinner/LoadingSpinner";
import ErrorWrapper from "../../Error/ErrorWrapper";
import Paginations from "../../Pagination/Pagination";
import { useReadFashionList } from "@/app/_hooks/useFashion";
import { useQueryString } from "@/app/_hooks/useQueryString";
import { formatDateInDash } from "@/app/_utils/dateFn";

export default function TagFashionList() {
  const { data, isLoading } = useReadFashionList();
  const { validStart, validEnd } = useQueryString();

  if (isLoading) return <LoadingSpinner />;

  if (data?.fashionList.length === 0 || !data) {
    return (
      <ErrorWrapper>
        <p className=" text-2xl">
          {formatDateInDash(validStart)} ~ {formatDateInDash(validEnd)}
        </p>
      </ErrorWrapper>
    );
  }

  return (
    <>
      <ItemEntry data={data.fashionList} type="fashion" />
      <div className=" h-16 w-full">
        <Paginations totalPages={data?.totalPages ?? 1} />
      </div>
    </>
  );
}
