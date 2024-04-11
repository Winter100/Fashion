"use client";

import Link from "next/link";
import getAuth from "@/app/_utils/getAuth";

import { useQuery } from "@tanstack/react-query";
import { useSignOut } from "@/app/_utils/signOut";

export default function AuthBar() {
  const { data, isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: getAuth,
  });

  const { mutate } = useSignOut();

  function signOut() {
    mutate();
  }

  const user = data?.user;

  if (isLoading) return null;
  if (!user && !isLoading) return <Link href={"/auth/signin"}>로그인</Link>;
  if (user && !isLoading) return <button onClick={signOut}>로그아웃</button>;
}
