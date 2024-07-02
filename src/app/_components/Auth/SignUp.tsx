"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button, Spinner, TextInput } from "flowbite-react";

import Manage from "../Manage/Manage";
import { useSignUp } from "@/app/_hooks/useAuth";
import { signUpType } from "@/app/_types/type";
import { isValidSignValue } from "@/app/_utils/isValid";

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
    const { email, name, password } = value;

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
      className="m-auto mt-20 flex max-w-md flex-col md:mt-40 md:w-full "
    >
      <Manage>
        <Manage.Title className="my-4 text-center text-6xl md:text-7xl">
          이 옷 어때?
        </Manage.Title>
        <Manage.Description className="text-center text-xl">
          하루를 기록할 준비하기
        </Manage.Description>

        <Manage.ContentWrapper className="my-4 flex gap-4 text-xl">
          <Manage.ContentArea>
            <Manage.Label className="flex w-full items-center justify-center">
              <div
                className={`w-20 text-center ${errors.email ? "text-red-500" : ""}`}
              >
                이메일
              </div>
              <Manage.Content className=" w-full">
                <TextInput
                  autoComplete="off"
                  disabled={isPending}
                  autoFocus
                  id="email"
                  type="email"
                  placeholder="이메일"
                  style={{
                    fontSize: "20px",
                  }}
                  {...register("email", {
                    required: true,
                    validate: (value) => isValidSignValue(value, "email"),
                  })}
                />
              </Manage.Content>
            </Manage.Label>
          </Manage.ContentArea>

          <Manage.ContentArea>
            <Manage.Label className="flex w-full items-center justify-center">
              <div
                className={`w-20 text-center ${errors.name ? "text-red-500" : ""}`}
              >
                닉네임
              </div>
              <Manage.Content className=" w-full">
                <TextInput
                  autoComplete="off"
                  disabled={isPending}
                  id="name"
                  type="nickname"
                  placeholder="닉네임"
                  style={{
                    fontSize: "20px",
                  }}
                  {...register("name", {
                    required: true,
                    validate: (value) => isValidSignValue(value, "name"),
                  })}
                />
              </Manage.Content>
            </Manage.Label>
          </Manage.ContentArea>

          <Manage.ContentArea>
            <Manage.Label className="flex w-full items-center justify-center">
              <div
                className={`w-20 text-center ${errors.password ? "text-red-500" : ""}`}
              >
                비밀번호
              </div>
              <Manage.Content className=" w-full ">
                <TextInput
                  autoComplete="new-password"
                  disabled={isPending}
                  placeholder="비밀번호"
                  id="password"
                  type="password"
                  style={{
                    fontSize: "20px",
                  }}
                  {...register("password", {
                    required: true,
                    validate: (value) => isValidSignValue(value, "password"),
                  })}
                />
              </Manage.Content>
            </Manage.Label>
          </Manage.ContentArea>

          <Manage.ContentArea>
            <Manage.Label className="flex w-full items-center justify-center">
              <div
                className={`w-20 text-center ${errors.passwordConfirm ? "text-red-500" : ""}`}
              >
                비밀번호 확인
              </div>
              <Manage.Content className=" w-full">
                <TextInput
                  autoComplete="new-password"
                  disabled={isPending}
                  placeholder="비밀번호 확인"
                  id="passwordConfirm"
                  type="password"
                  style={{
                    fontSize: "20px",
                  }}
                  {...register("passwordConfirm", {
                    required: true,
                    validate: (value) => value === getValues().password,
                  })}
                />
              </Manage.Content>
            </Manage.Label>
          </Manage.ContentArea>

          <Manage.ContentArea>
            <Manage.Content className=" text-center text-lg text-red-500">
              {errors.root && <span>{errors.root.message}</span>}
            </Manage.Content>
          </Manage.ContentArea>

          <Manage.ContentArea>
            <Button className="w-full" disabled={isPending} type="submit">
              {!isPending ? (
                <span className=" text-2xl">회원가입</span>
              ) : (
                <Spinner aria-label="Spinner button example" size="sm" />
              )}
            </Button>
          </Manage.ContentArea>

          <Manage.ContentArea className="flex">
            {!isPending && (
              <button
                disabled={isPending}
                type="button"
                onClick={routeHandler}
                className="m-auto inline-block text-center  text-2xl hover:font-bold "
              >
                로그인
              </button>
            )}
          </Manage.ContentArea>
        </Manage.ContentWrapper>
      </Manage>
    </form>
  );
}
