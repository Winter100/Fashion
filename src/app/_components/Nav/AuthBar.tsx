"use client";

import Link from "next/link";
import useSignout from "@/app/_hooks/useSignout";
import { useUserContextData } from "@/app/_context/ContextProvider";

export default function AuthBar() {
  const { signout: signoutMutation } = useSignout();
  const { userData, clearLoginData } = useUserContextData();

  function signOut() {
    signoutMutation();
    clearLoginData();
  }

  const isAuthenticated = userData?.aud === "authenticated";

  return (
    <>
      {!isAuthenticated ? (
        <Link href={"/auth/signin"}>로그인</Link>
      ) : (
        <button onClick={signOut}>로그아웃</button>
      )}
    </>
  );
}
