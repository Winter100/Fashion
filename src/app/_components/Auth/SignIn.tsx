"use client";

import { Button, Spinner } from "flowbite-react";

import Manage from "../Manage/Manage";
import InputField from "./InputField";
import { useSignIn } from "@/app/_hooks/useAuth";
import { isValidSignValue } from "@/app/_utils/isValid";

export default function SignIn() {
  const { isPending, routeToSignUp, errors, handleSubmit, onSubmit, register } =
    useSignIn();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-auto mt-20 max-w-md md:mt-40 md:w-full "
    >
      <Manage>
        <Manage.Title className="my-4 text-center text-6xl md:text-7xl">
          이 옷 어때?
        </Manage.Title>
        <Manage.Description className="text-center text-xl">
          하루의 패션을 기록해보세요!
        </Manage.Description>

        <Manage.ContentWrapper className="my-4 flex gap-4 text-xl">
          <Manage.ContentArea>
            <InputField
              register={register}
              id="email"
              placeholder="이메일"
              label="이메일"
              errors={errors}
              disabled={isPending}
              type="email"
              autoComplete="off"
              validation={{
                required: true,
                validate: (value: string) => isValidSignValue(value, "email"),
              }}
            />
          </Manage.ContentArea>

          <Manage.ContentArea>
            <InputField
              register={register}
              id="password"
              placeholder="비밀번호"
              label="비밀번호"
              errors={errors}
              disabled={isPending}
              type="password"
              autoComplete="current-password"
              validation={{
                required: true,
                validate: (value: string) =>
                  isValidSignValue(value, "password"),
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
                <span className=" text-2xl">로그인</span>
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
                onClick={routeToSignUp}
                className=" m-auto w-20 text-center text-2xl hover:font-bold "
              >
                회원가입
              </button>
            )}
          </Manage.ContentArea>
        </Manage.ContentWrapper>
      </Manage>
    </form>
  );
}
