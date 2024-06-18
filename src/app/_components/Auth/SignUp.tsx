"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button, Spinner, TextInput } from "flowbite-react";

import { useSignUp } from "@/app/_hooks/useAuth";
import { signUpType } from "@/app/_types/type";
import Manage from "../Manage/Manage";
import { EMAIL_REGEX, NAME_REGEX } from "@/app/_constant/constant";

export default function SignUp() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
    setFocus,
  } = useForm<signUpType>();

  const { signUp, isPending } = useSignUp();

  async function onSubmit(value: signUpType) {
    const { email, name: nickName, password } = value;

    if (!EMAIL_REGEX.test(email)) {
      setFocus("email");
      return setError("root", {
        message: "올바른 이메일 형식을 입력해주세요.",
      });
    }

    if (!NAME_REGEX.test(nickName)) {
      setFocus("name");
      return setError("root", {
        message: "닉네임에 공백, 숫자, 특수문자는 포함될 수 없습니다.",
      });
    }

    if (!password || password.trim().length < 6) {
      setFocus("password");
      return setError("root", {
        message: "비밀번호는 6자 이상으로 입력해주세요.",
      });
    }

    const name = nickName.replace(/\s+/g, "");

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

        <Manage.ContentWrapper className="my-4 flex gap-4">
          <Manage.ContentArea>
            <Manage.Label className="flex w-full items-center justify-center">
              <div className="w-16 text-center">
                {errors.email ? (
                  <div className=" text-red-500">{errors.email.message}</div>
                ) : (
                  "이메일"
                )}
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
                    fontFamily: "sans-serif",
                    fontSize: "0.75rem",
                  }}
                  {...register("email", { required: "이메일" })}
                />
              </Manage.Content>
            </Manage.Label>
          </Manage.ContentArea>

          <Manage.ContentArea>
            <Manage.Label className="flex w-full items-center justify-center">
              <div className="w-16 text-center">
                {errors.name ? (
                  <div className="text-red-500">{errors.name.message}</div>
                ) : (
                  "닉네임"
                )}
              </div>
              <Manage.Content className=" w-full">
                <TextInput
                  autoComplete="off"
                  disabled={isPending}
                  id="name"
                  type="nickname"
                  placeholder="닉네임"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "0.75rem",
                  }}
                  {...register("name", { required: "닉네임" })}
                />
              </Manage.Content>
            </Manage.Label>
          </Manage.ContentArea>

          <Manage.ContentArea>
            <Manage.Label className="flex w-full items-center justify-center">
              <div className="w-16 text-center">
                {errors.password ? (
                  <div className="text-red-500">{errors.password.message}</div>
                ) : (
                  "비밀번호"
                )}
              </div>
              <Manage.Content className=" w-full ">
                <TextInput
                  autoComplete="new-password"
                  disabled={isPending}
                  placeholder="비밀번호"
                  id="password"
                  type="password"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "0.75rem",
                  }}
                  {...register("password", {
                    required: "비밀번호",
                  })}
                />
              </Manage.Content>
            </Manage.Label>
          </Manage.ContentArea>

          <Manage.ContentArea>
            <Manage.Label className="flex w-full items-center justify-center">
              <div className="w-16 text-center">
                {errors.passwordConfirm ? (
                  <div className="text-red-500">
                    {errors.passwordConfirm.message}
                  </div>
                ) : (
                  "비밀번호 확인"
                )}
              </div>
              <Manage.Content className=" w-full">
                <TextInput
                  autoComplete="new-password"
                  disabled={isPending}
                  placeholder="비밀번호 확인"
                  id="passwordConfirm"
                  type="password"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "0.75rem",
                  }}
                  {...register("passwordConfirm", {
                    required: "비밀번호 확인",
                    validate: (value) =>
                      value === getValues().password || "서로 다릅니다",
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
