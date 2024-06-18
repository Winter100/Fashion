"use client";
import { Spinner } from "flowbite-react";

import Manage from "../Manage/Manage";

import { useUser } from "@/app/_hooks/useAuth";

export default function UserInfo() {
  const { user, isLoading } = useUser();

  const user_MetaData = user?.user_metadata;

  const email = user_MetaData?.email || "";
  const name = user_MetaData?.name || "";

  return (
    <Manage className=" mt-8">
      <Manage.Title>기본 정보</Manage.Title>
      <Manage.Description>나의 기본 정보들이 표시됩니다.</Manage.Description>
      <Manage.ContentWrapper className="gap-4 text-2xl">
        {isLoading ? (
          <Spinner className=" m-auto flex min-h-40" />
        ) : (
          <>
            <Manage.ContentArea className="flex">
              <Manage.Label className="w-40 text-center">이메일</Manage.Label>
              <Manage.Content>{email}</Manage.Content>
            </Manage.ContentArea>
            <Manage.ContentArea className="flex">
              <Manage.Label className="w-40 text-center">이름</Manage.Label>
              <Manage.Content>{name}</Manage.Content>
            </Manage.ContentArea>
          </>
        )}
      </Manage.ContentWrapper>
    </Manage>
  );
}
