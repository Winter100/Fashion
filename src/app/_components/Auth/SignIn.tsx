"use client";

import useFetch from "@/app/_hooks/useFetch";
import useInput from "@/app/_hooks/useInput";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { FormEvent } from "react";

const fetchUrl = "";
const method = "POST";

export default function SignIn() {
  const { input, handleChange } = useInput({
    email: "",
    password: "",
  });

  const { isLoading, handleFetch } = useFetch();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const { email, password } = input;

    if (!email || !password) return;

    const value = {
      email,
      password,
    };
    const data = await handleFetch(fetchUrl, method, value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto mt-40 flex w-full max-w-md flex-col gap-4 "
    >
      <h1 className="m-auto text-8xl">로그인</h1>
      <div>
        <div className="mb-2 block ">
          <Label className="text-2xl" htmlFor="email" value="이메일" />
        </div>
        <TextInput
          style={{ fontSize: "24px", padding: "7px" }}
          onChange={handleChange}
          name="email"
          value={input.email}
          id="email"
          type="email"
          disabled={isLoading}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label className="text-2xl" htmlFor="password1" value="비밀번호" />
        </div>
        <TextInput
          onChange={handleChange}
          style={{ fontSize: "24px", padding: "7px" }}
          name="password"
          value={input.password}
          id="password"
          type="password"
          disabled={isLoading}
          required
        />
      </div>
      <Button type="submit" disabled={isLoading}>
        {!isLoading ? (
          <span className=" text-2xl">로그인</span>
        ) : (
          <Spinner aria-label="Spinner button example" size="sm" />
        )}
      </Button>
    </form>
  );
}
