"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button, Label, Spinner, TextInput } from "flowbite-react";

import { signInType } from "@/app/_types/type";
import useLogin from "@/app/_hooks/useLogin";
import { useUserContextData } from "../Provider/UserContextProvider";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<signInType>();

  const { login, isPending } = useLogin();
  const { setLoginData } = useUserContextData();

  const router = useRouter();

  function onSubmit(value: signInType) {
    const { email, password } = value;

    login(
      { email, password },
      {
        onError: (e) => {
          setError("root", { message: "아이디 또는 비밀번호를 확인해주세요." });
        },
        onSuccess: (e) => {
          setLoginData(e?.user);
        },
      },
    );
  }

  function routeHandler(e: FormEvent) {
    e.preventDefault();
    router.push("/auth/signup");
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
          disabled={isPending}
          autoFocus
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
          disabled={isPending}
          autoComplete="off"
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
      {!isPending && (
        <button
          disabled={isPending}
          type="button"
          onClick={routeHandler}
          className="m-auto inline-block text-center  text-2xl text-blue-600 hover:font-bold "
        >
          회원가입
        </button>
      )}
      <Button disabled={isPending} type="submit">
        {!isPending ? (
          <span className=" text-2xl">로그인</span>
        ) : (
          <Spinner aria-label="Spinner button example" size="sm" />
        )}
      </Button>
    </form>
  );
}
