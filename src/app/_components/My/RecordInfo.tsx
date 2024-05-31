"use client";

import { useRouter } from "next/navigation";
import { Spinner } from "flowbite-react";

import Manage from "../Manage/Manage";
import { useMyFashionList } from "@/app/_hooks/useFashionMethods";
import { MyFashionListType } from "@/app/_types/type";
import { tagCount } from "@/app/_utils/tagCount";
import { removeFilteredValueForLocalStorage } from "@/app/_utils/localstorage";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import ErrorWrapper from "../Error/ErrorWrapper";

export default function RecordInfo() {
  const router = useRouter();
  const { data, isLoading } = useMyFashionList<MyFashionListType>();

  if (isLoading || !data) {
    return <LoadingSpinner />;
  }

  const { todayCount, tomorrowCount, thisCount, totalCount } = tagCount(data);

  function handleRoute() {
    router.push("/mypage/list");
    removeFilteredValueForLocalStorage();
  }

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
            <Manage.ContentArea>
              <Manage.Label>오늘 어때?</Manage.Label>
              <Manage.Content>{todayCount} 개</Manage.Content>
            </Manage.ContentArea>
            <Manage.ContentArea>
              <Manage.Label>내일 어때?</Manage.Label>
              <Manage.Content>{tomorrowCount} 개</Manage.Content>
            </Manage.ContentArea>
            <Manage.ContentArea>
              <Manage.Label>이거 어때?</Manage.Label>
              <Manage.Content>{thisCount} 개</Manage.Content>
            </Manage.ContentArea>
            <Manage.ContentArea>
              <Manage.Label>모든 기록</Manage.Label>
              <Manage.Content>{totalCount} 개</Manage.Content>
            </Manage.ContentArea>
          </>
        )}
      </Manage.ContentWrapper>
    </Manage>
  );
}
