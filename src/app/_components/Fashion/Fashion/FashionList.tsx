"use client";

import ItemEntry from "../ItemEntry";
import LoadingSpinner from "../../Spinner/LoadingSpinner";
import ErrorWrapper from "../../Error/ErrorWrapper";
import { useReadFashionList } from "@/app/_hooks/useFashion";

export default function TagFashionList() {
  const { data, isLoading } = useReadFashionList();

  if (isLoading) return <LoadingSpinner />;
  if (data?.length === 0 || !data) {
    return (
      <ErrorWrapper>
        <span>등록된 기록이 없습니다.</span>
      </ErrorWrapper>
    );
  }

  return <ItemEntry data={data} type="fashion" />;
}
