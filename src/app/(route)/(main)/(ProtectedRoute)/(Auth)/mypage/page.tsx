"use client";

import { useUser } from "@/app/_hooks/useAuth";
import Manage from "@/app/_components/Manage/Manage";
import ErrorWrapper from "@/app/_components/Error/ErrorWrapper";
import { convertToKST } from "@/app/_utils/convertToKST";
import Link from "next/link";

export default function Page() {
  const { user } = useUser();

  if (!user) return <ErrorWrapper>로그인이 필요합니다.</ErrorWrapper>;

  const { email, name } = user.user_metadata;
  const { last_sign_in_at, created_at, updated_at } = user;

  const convert_Created_at = convertToKST(created_at);
  const convert_lastSignIn_at =
    (last_sign_in_at && convertToKST(last_sign_in_at)) ?? "정보가 없습니다";

  return (
    <>
      <div className="m-auto max-w-3xl">
        <h1 className="text-5xl">마이페이지</h1>

        <div className=" h-full">
          <Manage className=" mt-8">
            <Manage.Title>기본 정보</Manage.Title>
            <Manage.Description>
              나의 기본 정보들이 표시됩니다.
            </Manage.Description>
            <Manage.ContentWrapper className="mt-2 gap-4 text-2xl">
              <Manage.ContentArea>
                <Manage.Label>이메일</Manage.Label>
                <Manage.Content>{email}</Manage.Content>
              </Manage.ContentArea>
              <Manage.ContentArea>
                <Manage.Label>이름</Manage.Label>
                <Manage.Content>{name}</Manage.Content>
              </Manage.ContentArea>
              <Manage.ContentArea>
                <Manage.Label>비밀번호</Manage.Label>
                <Manage.Content>변경하기</Manage.Content>
              </Manage.ContentArea>
            </Manage.ContentWrapper>
          </Manage>

          <Manage className="mt-12">
            <Manage.Title>기록 정보</Manage.Title>
            <Manage.Description className=" flex justify-between">
              <span>내가 기록한 패션의 수 입니다.</span>
              <Link prefetch={false} href={"/mypage/list"} className=" mx-4">
                관리 하기
              </Link>
            </Manage.Description>
            <Manage.ContentWrapper className="mt-2 gap-4 text-2xl">
              <Manage.ContentArea>
                <Manage.Label>오늘 어때?</Manage.Label>
                <Manage.Content>12개</Manage.Content>
              </Manage.ContentArea>
              <Manage.ContentArea>
                <Manage.Label>내일 어때?</Manage.Label>
                <Manage.Content>9978개</Manage.Content>
              </Manage.ContentArea>
              <Manage.ContentArea>
                <Manage.Label>이거 어때?</Manage.Label>
                <Manage.Content>07개</Manage.Content>
              </Manage.ContentArea>
              <Manage.ContentArea>
                <Manage.Label>남긴 댓글</Manage.Label>
                <Manage.Content>7825개</Manage.Content>
              </Manage.ContentArea>
            </Manage.ContentWrapper>
          </Manage>

          <Manage className="mt-12">
            <Manage.Title>로그인 정보</Manage.Title>
            <Manage.ContentWrapper className="mt-2 gap-4 text-2xl">
              <Manage.ContentArea>
                <Manage.Label>가입일</Manage.Label>
                <Manage.Content>{convert_Created_at}</Manage.Content>
              </Manage.ContentArea>
              <Manage.ContentArea>
                <Manage.Label>마지막 로그인</Manage.Label>
                <Manage.Content>{convert_lastSignIn_at}</Manage.Content>
              </Manage.ContentArea>
            </Manage.ContentWrapper>
          </Manage>
        </div>
      </div>
    </>
  );
}
