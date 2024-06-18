"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button, Spinner, TextInput } from "flowbite-react";

import { useUserContextData } from "@/app/_provider/UserContextProvider";
import { signInType } from "@/app/_types/type";
import { useSignIn } from "@/app/_hooks/useAuth";
import Manage from "../Manage/Manage";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<signInType>({
    defaultValues: {
      email: "test@test.com",
      password: "test1234",
    },
  });

  const { login, isPending } = useSignIn();
  const { setLoginData } = useUserContextData();

  const router = useRouter();

  function onSubmit(value: signInType) {
    const { email, password } = value;

    if (!email.trim() || !password.trim()) {
      return setError("root", {
        message: "이메일 또는 비밀번호를 입력해주세요.",
      });
    }

    login(
      { email, password },
      {
        onError: (e) => {
          setError("root", { message: e.message });
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
      className="m-auto mt-20 max-w-md md:mt-40 md:w-full "
    >
      <Manage>
        <Manage.Title className="my-4 text-center text-6xl md:text-7xl">
          이 옷 어때?
        </Manage.Title>
        <Manage.Description className="text-center text-xl">
          하루의 패션을 기록해보세요!
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
                {errors.password ? (
                  <div className="text-red-500">{errors.password.message}</div>
                ) : (
                  "비밀번호"
                )}
              </div>
              <Manage.Content className=" w-full">
                <TextInput
                  disabled={isPending}
                  autoComplete="off"
                  id="password"
                  type="password"
                  placeholder="비밀번호"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "0.75rem",
                  }}
                  {...register("password", { required: "비밀번호" })}
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
                onClick={routeHandler}
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
