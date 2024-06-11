"use client";

import LoadingSpinner from "@/app/_components/Spinner/LoadingSpinner";
import ErrorWrapper from "@/app/_components/Error/ErrorWrapper";
import Detail from "@/app/_components/Fashion/Detail/Detail";

import CommentEntry from "@/app/_components/Comment/CommentEntry";
import { useReadDetail } from "@/app/_hooks/useFashion";
import BackButton from "@/app/_components/Button/BackButton";

export default function Page() {
  const { isLoading, data } = useReadDetail();

  if (isLoading) return <LoadingSpinner />;

  if (!data) {
    return (
      <ErrorWrapper className="flex h-full w-full cursor-default flex-col items-center justify-center text-center text-5xl">
        <p>존재하지 않는 기록입니다.</p>
        <div className=" flex justify-center">
          <BackButton className=" h-12" color="gray" />
        </div>
      </ErrorWrapper>
    );
  }

  return (
    <div className="layout-max-width m-auto flex h-full w-full flex-col">
      <div className="h-13 flex w-full items-center justify-between">
        <BackButton color="green" />
      </div>
      <Detail {...data} />
      <CommentEntry />
    </div>
  );
}
