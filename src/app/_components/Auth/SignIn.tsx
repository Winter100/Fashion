"use client";

import { Button, Label, TextInput } from "flowbite-react";

export default function SignIn() {
  return (
    <form className="m-auto mt-40 flex w-full max-w-md flex-col gap-4 ">
      <div>
        <div className="mb-2 block ">
          <Label className="text-2xl" htmlFor="email1" value="이메일" />
        </div>
        <TextInput
          style={{ fontSize: "24px", padding: "7px" }}
          id="email1"
          type="email"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label className="text-2xl" htmlFor="password1" value="비밀번호" />
        </div>
        <TextInput
          style={{ fontSize: "24px", padding: "7px" }}
          id="password1"
          type="password"
          required
        />
      </div>
      <Button type="submit">
        <span className=" text-2xl">로그인</span>
      </Button>
    </form>
  );
}
