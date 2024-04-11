"use client";

import Link from "next/link";
import handleSignIn from "@/app/_utils/signIn";

import { signInType } from "@/app/_types/type";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<signInType>();

  const queryClient = useQueryClient();

  async function onSubmit(value: signInType) {
    setIsLoading(true);
    const { email, password } = value;
    const { error } = await handleSignIn(email, password);

    if (error?.status === 400) {
      setError("root", { message: "아이디 또는 비밀번호를 확인해주세요" });
      setIsLoading(false);
      return;
    }
    await queryClient.invalidateQueries({ queryKey: ["auth"] });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-auto mt-40 flex w-full max-w-md flex-col gap-4 "
    >
      <h1 className="m-auto text-8xl">로그인</h1>
      <div>
        <div className="mb-2 block ">
          <Label className="text-2xl" htmlFor="email" value="이메일" />
          {errors?.email && (
            <span className="ml-4 text-2xl text-red-500">
              {errors?.email?.message}
            </span>
          )}
        </div>
        <TextInput
          style={{ fontSize: "24px", padding: "7px" }}
          id="email"
          type="email"
          {...register("email", { required: "이메일을 입력해주세요" })}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label className="text-2xl" htmlFor="password" value="비밀번호" />
          {errors?.password && (
            <span className="ml-4 text-2xl text-red-500">
              {errors?.password?.message}
            </span>
          )}
        </div>
        <TextInput
          id="password"
          type="password"
          style={{ fontSize: "24px", padding: "7px" }}
          {...register("password", { required: "비밀번호를 입력해주세요" })}
        />
      </div>
      {errors.root && (
        <span className=" m-auto text-2xl text-red-600">
          {errors.root.message}
        </span>
      )}
      <span className=" text-center  text-2xl text-blue-600 ">
        <Link className=" hover:font-bold" href={"/auth/signup"}>
          회원가입으로...
        </Link>
      </span>
      <Button disabled={isLoading} type="submit">
        {!isLoading ? (
          <span className=" text-2xl">로그인</span>
        ) : (
          <Spinner aria-label="Spinner button example" size="sm" />
        )}
      </Button>
    </form>
  );
}
