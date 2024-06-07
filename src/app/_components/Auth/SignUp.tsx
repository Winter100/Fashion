"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button, Label, Spinner, TextInput } from "flowbite-react";

import { useSignUp } from "@/app/_hooks/useAuth";

import { signUpType } from "@/app/_types/type";

export default function SignUp() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm<signUpType>();

  const { signUp, isPending } = useSignUp();

  async function onSubmit(value: signUpType) {
    const { email, name: fullName, password } = value;

    const name = fullName.replace(/\s+/g, "");

    signUp(
      { email, name, password },
      {
        onError: (e) => {
          setError("root", { message: e.message }, { shouldFocus: true });
        },
      },
    );
  }

  function routeHandler(e: FormEvent) {
    e.preventDefault();
    router.push("/auth/signin");
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
          disabled={isPending}
          autoFocus
          style={{
            padding: "7px",
            fontFamily: "sans-serif",
            fontSize: "0.75rem",
          }}
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
          disabled={isPending}
          id="name"
          style={{
            padding: "7px",
            fontFamily: "sans-serif",
            fontSize: "0.75rem",
          }}
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
          disabled={isPending}
          id="password"
          type="password"
          style={{
            padding: "7px",
            fontFamily: "sans-serif",
            fontSize: "0.75rem",
          }}
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
          disabled={isPending}
          id="passwordConfirm"
          type="password"
          style={{
            padding: "7px",
            fontFamily: "sans-serif",
            fontSize: "0.75rem",
          }}
          {...register("passwordConfirm", {
            required: true,
            validate: (value) =>
              value === getValues().password || "비밀번호가 다릅니다.",
          })}
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
          로그인
        </button>
      )}
      <Button disabled={isPending} type="submit">
        {!isPending ? (
          <span className=" text-2xl">회원가입</span>
        ) : (
          <Spinner aria-label="Spinner button example" size="sm" />
        )}
      </Button>
    </form>
  );
}
