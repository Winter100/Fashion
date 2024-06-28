"use client";

import ItemEntry from "../ItemEntry";
import LoadingSpinner from "../../Spinner/LoadingSpinner";
import AlertWrapper from "../../Error/AlertWrapper";
import Paginations from "../../Pagination/Pagination";
import { useReadFashionList } from "@/app/_hooks/useFashion";
import { useQueryString } from "@/app/_hooks/useQueryString";
import { formatDateInDash } from "@/app/_utils/dateFn";

export default function TagFashionList() {
  const { data, isLoading, isError, error } = useReadFashionList();
  const { validStart, validEnd } = useQueryString();

  if (isLoading) return <LoadingSpinner />;
  if (data?.fashionList.length === 0 || !data) {
    return (
      <AlertWrapper description="등록된 기록이 없습니다.">
        <p className="text-2xl">
          {formatDateInDash(validStart)} ~{formatDateInDash(validEnd)}
        </p>
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

  return (
    <>
      <ItemEntry data={data?.fashionList} type="fashion" />
      <div className=" h-16 w-full">
        <Paginations totalPages={data?.totalPages ?? 1} />
      </div>
    </>
  );
}
