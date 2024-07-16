"use client";

import ItemEntry from "../ItemEntry";
import Paginations from "@/app/_components/Common/Pagination";
import AlertWrapper from "@/app/_components/Common/AlertWrapper";
import LoadingSpinner from "@/app/_components/Common/LoadingSpinner";
import { useReadFashionList } from "@/app/_hooks/useFashion";
import { formatDateInDash } from "@/app/_lib/utils/dateFn";

export default function TagFashionList() {
  const { data, isLoading, isError, error, validStart, validEnd } =
    useReadFashionList();

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
