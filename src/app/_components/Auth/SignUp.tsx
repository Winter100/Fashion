"use client";

import { Button, Spinner } from "flowbite-react";

import Manage from "../Manage/Manage";
import InputField from "./InputField";
import { useSignUp } from "@/app/_hooks/useAuth";
import { isValidSignValue } from "@/app/_utils/isValid";

export default function SignUp() {
  const {
    isPending,
    errors,
    getValues,
    handleSubmit,
    register,
    routeToSignIn,
    onSubmit,
  } = useSignUp();

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
            <InputField
              id="email"
              label="이메일"
              type="email"
              placeholder="이메일"
              register={register}
              disabled={isPending}
              autoComplete="off"
              errors={errors}
              validation={{
                required: true,
                validate: (value: string) => isValidSignValue(value, "email"),
              }}
            />
          </Manage.ContentArea>

          <Manage.ContentArea>
            <InputField
              id="name"
              label="닉네임"
              type="name"
              placeholder="닉네임"
              register={register}
              disabled={isPending}
              autoComplete="off"
              errors={errors}
              validation={{
                required: true,
                validate: (value: string) => isValidSignValue(value, "name"),
              }}
            />
          </Manage.ContentArea>

          <Manage.ContentArea>
            <InputField
              id="password"
              label="비밀번호"
              type="password"
              placeholder="비밀번호"
              register={register}
              disabled={isPending}
              autoComplete="new-password"
              errors={errors}
              validation={{
                required: true,
                validate: (value: string) =>
                  isValidSignValue(value, "password"),
              }}
            />
          </Manage.ContentArea>

          <Manage.ContentArea>
            <InputField
              id="passwordConfirm"
              label="비밀번호 확인"
              type="password"
              placeholder="비밀번호 확인"
              register={register}
              disabled={isPending}
              autoComplete="off"
              errors={errors}
              validation={{
                required: true,
                validate: (value: string) => value === getValues().password,
              }}
            />
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
                onClick={routeToSignIn}
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
