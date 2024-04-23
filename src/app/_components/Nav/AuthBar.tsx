"use client";

import { useRouter } from "next/navigation";

import useSignout from "@/app/_hooks/useSignout";
import { useUserContextData } from "@/app/_context/ContextProvider";

export default function AuthBar() {
  const router = useRouter();

  const { signout: signoutMutation } = useSignout();
  const { userData, clearLoginData } = useUserContextData();

  function signOut() {
    signoutMutation();
    clearLoginData();
  }

  function signInRoute() {
    router.push("/auth/signin");
  }

  const isAuthenticated = userData?.aud === "authenticated";

  return (
    <>
      {!isAuthenticated ? (
        <button onClick={signInRoute}>로그인</button>
      ) : (
        <button onClick={signOut}>로그아웃</button>
      )}
    </>
  );
}
