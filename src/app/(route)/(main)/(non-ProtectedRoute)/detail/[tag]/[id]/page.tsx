"use client";

import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";

import LoadingSpinner from "@/app/_components/Spinner/LoadingSpinner";
import ErrorWrapper from "@/app/_components/Error/ErrorWrapper";
import Detail from "@/app/_components/Fashion/Detail/Detail";

import CommentEntry from "@/app/_components/Comment/CommentEntry";
import { useReadDetail } from "@/app/_hooks/useFashion";

export default function Page() {
  const router = useRouter();
  const { isLoading, data } = useReadDetail();

  if (isLoading) return <LoadingSpinner />;

  if (!data) {
    return <ErrorWrapper>등록된 기록이 없습니다.</ErrorWrapper>;
  }

  return (
    <div className="layout-max-width m-auto flex h-full w-full flex-col">
      <div className="h-13 flex w-full items-center justify-between">
        <Button
          className="h-full"
          onClick={() => router.back()}
          size="md"
          color="green"
        >
          <span className="text-xl">뒤로가기</span>
        </Button>
      </div>
      <Detail {...data} />
      <CommentEntry />
    </div>
  );
}
