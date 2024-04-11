"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button, Label, Spinner, TextInput } from "flowbite-react";

import { signUpType } from "@/app/_types/type";
import handleSignUp from "@/app/_utils/signUp";
import Link from "next/link";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<signUpType>();

  async function onSubmit(e: signUpType) {
    if (e.password !== e.passwordConfirm) {
      return setError(
        "passwordConfirm",
        { message: "비밀번호가 일치하지 않습니다" },
        { shouldFocus: true },
      );
    }

    setIsLoading(true);
    const { email, name, password } = e;
    const { error } = await handleSignUp(email, password, name);

    if (error?.status === 422) {
      setError(
        "root",
        { message: "다른 이메일을 사용해주세요" },
        { shouldFocus: true },
      );
      return setIsLoading(false);
    }
    router.replace("/");
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-auto mt-40 flex w-full max-w-md flex-col gap-4 "
    >
      <h1 className="m-auto text-8xl">회원가입</h1>
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
        <div className="mb-2 block ">
          <Label className="text-2xl" htmlFor="name" value="닉네임" />
          {errors?.name && (
            <span className="ml-4 text-2xl text-red-500">
              {errors?.name?.message}
            </span>
          )}
        </div>
        <TextInput
          id="name"
          style={{ fontSize: "24px", padding: "7px" }}
          {...register("name", { required: "닉네임을 입력해주세요" })}
        />
      </div>
      <div>
        <div className="mb-2 block ">
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
      <div>
        <div className="mb-2 block ">
          <Label
            className="text-2xl"
            htmlFor="passwordConfirm"
            value="비밀번호 확인"
          />
          {errors?.passwordConfirm && (
            <span className="ml-4 text-2xl text-red-500">
              {errors?.passwordConfirm?.message}
            </span>
          )}
        </div>
        <TextInput
          id="passwordConfirm"
          type="password"
          style={{ fontSize: "24px", padding: "7px" }}
          {...register("passwordConfirm", { required: true })}
        />
      </div>
      {errors.root && (
        <span className=" m-auto text-2xl text-red-600">
          {errors.root.message}
        </span>
      )}
      <span className=" text-center  text-2xl text-blue-600 ">
        <Link className=" hover:font-bold" href={"/auth/signin"}>
          로그인으로...
        </Link>
      </span>
      <Button disabled={isLoading} type="submit">
        {!isLoading ? (
          <span className=" text-2xl">회원가입</span>
        ) : (
          <Spinner aria-label="Spinner button example" size="sm" />
        )}
      </Button>
    </form>
  );
}
