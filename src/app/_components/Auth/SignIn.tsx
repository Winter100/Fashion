"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button, Spinner, TextInput } from "flowbite-react";

import Manage from "../Manage/Manage";
import { useUserContextData } from "@/app/_provider/UserContextProvider";
import { signInType } from "@/app/_types/type";
import { useSignIn } from "@/app/_hooks/useAuth";
import { isValidSignValue } from "@/app/_utils/isValid";

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
                  style={{ fontSize: "20px" }}
                  disabled={isPending}
                  autoFocus
                  id="email"
                  type="email"
                  autoComplete="off"
                  placeholder="이메일"
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
                className={`w-20 text-center ${errors.password ? "text-red-500" : ""}`}
              >
                비밀번호
              </div>
              <Manage.Content className=" w-full">
                <TextInput
                  disabled={isPending}
                  autoComplete="current-password"
                  id="password"
                  type="password"
                  placeholder="비밀번호"
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
