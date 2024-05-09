"use client";

import LeftLayout from "@/app/_components/Layout/LeftLayout";
import { useUser } from "@/app/_hooks/useAuth";
import { Button, ButtonGroup } from "flowbite-react";

export default function Page() {
  const { user } = useUser();

  const email = user?.user_metadata.email;
  const name = user?.user_metadata.name;

  return (
    <>
      <div className="m-auto max-w-3xl">
        <h1 className=" text-center text-6xl">마이페이지</h1>
        <div className="flex h-96 w-full border">
          <LeftLayout className="w-48 border">
            <div>
              <ul className="flex flex-col items-center justify-center gap-10 p-5">
                <li>
                  <ButtonGroup>
                    <Button>내 정보</Button>
                    <Button>내 기록</Button>
                  </ButtonGroup>
                </li>
              </ul>
            </div>
          </LeftLayout>
          <div className="flex-1 p-5 text-3xl">
            <div className="flex h-full ">
              <div className="grid w-36 grid-rows-4 items-center justify-items-center">
                <p className="flex-1">이메일</p>
                <p className="flex-1">이름</p>
                <p className="flex-1">비밀번호</p>
                <p className="flex-1">비밀번호</p>
              </div>

              <div className="grid w-full grid-rows-4 items-center justify-items-center">
                <p className=" ">{email}</p>
                <p className=" ">{name}</p>
                <p className=" ">변경하기</p>
                <p className=" "></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
