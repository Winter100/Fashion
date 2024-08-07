"use client";

import { Spinner } from "flowbite-react";

import { useUser } from "@/app/_hooks/useAuth";
import { convertToKST } from "@/app/_lib/utils/convertToKST";
import Manage from "../Common/Manage/Manage";

export default function LoginInfo() {
  const { user, isLoading } = useUser();

  const createdAt = user?.created_at;
  const lastSignInAt = user?.last_sign_in_at;

  const convert_Created_at =
    (createdAt && convertToKST(createdAt)) ?? "정보가 없습니다";
  const convert_lastSignIn_at =
    (lastSignInAt && convertToKST(lastSignInAt)) ?? "정보가 없습니다";

  return (
    <Manage className="mt-12">
      <Manage.Title>로그인 정보</Manage.Title>
      <Manage.ContentWrapper className="mt-2 gap-4 text-xl md:text-2xl">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Manage.ContentArea className="flex">
              <Manage.Label className="w-28 text-center">가입일</Manage.Label>
              <Manage.Content>{convert_Created_at}</Manage.Content>
            </Manage.ContentArea>

            <Manage.ContentArea className="flex">
              <Manage.Label className="w-28 text-center">
                마지막 로그인
              </Manage.Label>
              <Manage.Content>{convert_lastSignIn_at}</Manage.Content>
            </Manage.ContentArea>
          </>
        )}
      </Manage.ContentWrapper>
    </Manage>
  );
}
