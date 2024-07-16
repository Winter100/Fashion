"use client";

import DetailItem from "@/app/_components/Fashion/Detail/DetailItem";
import { useReadDetail } from "@/app/_hooks/useFashion";
import { TAG_NAME } from "@/app/_constant/constant";
import LoadingSpinner from "../../Common/LoadingSpinner";
import AlertWrapper from "../../Common/AlertWrapper";
import BackButton from "../../Common/BackButton";
import { setFashionRoute } from "@/app/_lib/utils/setFashionRoute";
import CommentEntry from "../../Comments/CommentEntry";

export default function Detail() {
  const { isLoading, data, isError, error, router } = useReadDetail();

  if (isLoading) return <LoadingSpinner />;

  if (!data) {
    return (
      <AlertWrapper description="등록된 기록이 없습니다.">
        <BackButton
          value="홈으로"
          className=" h-12"
          color="gray"
          onClick={() =>
            router.replace(setFashionRoute(TAG_NAME.fashion, TAG_NAME.today))
          }
        />
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
    <div className="layout-max-width m-auto flex h-full w-full flex-col">
      <div className="h-13 my-0 flex w-full items-center justify-between md:my-4">
        <BackButton color="light" onClick={router.back} />
      </div>
      <DetailItem {...data} />
      <CommentEntry />
    </div>
  );
}
