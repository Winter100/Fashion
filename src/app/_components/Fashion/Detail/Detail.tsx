"use client";

import LoadingSpinner from "@/app/_components/Spinner/LoadingSpinner";
import ErrorWrapper from "@/app/_components/Error/ErrorWrapper";
import DetailItem from "@/app/_components/Fashion/Detail/DetailItem";

import CommentEntry from "@/app/_components/Comment/CommentEntry";
import { useReadDetail } from "@/app/_hooks/useFashion";
import BackButton from "@/app/_components/Button/BackButton";

export default function Detail() {
  const { isLoading, data } = useReadDetail();

  if (isLoading) return <LoadingSpinner />;

  if (!data) {
    return (
      <ErrorWrapper>
        <div className=" flex justify-center">
          <BackButton className=" h-12" color="gray" />
        </div>
      </ErrorWrapper>
    );
  }

  return (
    <div className="layout-max-width m-auto flex h-full w-full flex-col py-4">
      <div className="h-13 flex w-full items-center justify-between">
        <BackButton color="green" />
      </div>
      <DetailItem {...data} />
      <CommentEntry />
    </div>
  );
}
