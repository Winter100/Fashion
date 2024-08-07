"use client";

import { Spinner } from "flowbite-react";

import Manage from "../Common/Manage/Manage";
import LoadingSpinner from "../Common/LoadingSpinner";
import { useReadMyFashionList } from "@/app/_hooks/useFashion";
import { tagCount } from "@/app/_lib/utils/tagCount";
import { MyFashionListType } from "@/app/_types/type";

export default function RecordInfo() {
  const { data, isLoading, handleRoute } =
    useReadMyFashionList<MyFashionListType>();

  if (isLoading || !data) {
    return <LoadingSpinner />;
  }

  const { todayCount, tomorrowCount, thisCount, totalCount } = tagCount(data);

  return (
    <Manage className="mt-12">
      <Manage.Title>기록 정보</Manage.Title>
      <Manage.Description className="flex justify-between">
        <span>그동안 기록한 패션의 수 입니다.</span>
        <button onClick={handleRoute}>기록 관리</button>
      </Manage.Description>
      <Manage.ContentWrapper className="mt-2 gap-4 text-2xl">
        {isLoading ? (
          <Spinner className=" m-auto flex min-h-40" />
        ) : (
          <>
            <Manage.ContentArea className="flex">
              <Manage.Label className="w-28 text-center">
                오늘 어때?
              </Manage.Label>
              <Manage.Content>{todayCount} 개</Manage.Content>
            </Manage.ContentArea>
            <Manage.ContentArea className="flex">
              <Manage.Label className="w-28 text-center">
                내일 어때?
              </Manage.Label>
              <Manage.Content>{tomorrowCount} 개</Manage.Content>
            </Manage.ContentArea>
            <Manage.ContentArea className="flex">
              <Manage.Label className="w-28 text-center">
                이거 어때?
              </Manage.Label>
              <Manage.Content>{thisCount} 개</Manage.Content>
            </Manage.ContentArea>
            <Manage.ContentArea className="flex">
              <Manage.Label className="w-28 text-center">
                모든 기록
              </Manage.Label>
              <Manage.Content>{totalCount} 개</Manage.Content>
            </Manage.ContentArea>
          </>
        )}
      </Manage.ContentWrapper>
    </Manage>
  );
}
