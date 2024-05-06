"use client";

import { useRouter } from "next/navigation";

import { useSignout } from "@/app/_hooks/useAuth";

import { useUserContextData } from "../Provider/UserContextProvider";

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
  function myPageRoute() {
    router.push("/mypage");
  }

  const isAuthenticated = userData?.aud === "authenticated";

  return (
    <ul className=" flex w-full">
      {!isAuthenticated ? (
        <li className=" auth-btn-hover">
          <button className="w-full" onClick={signInRoute}>
            로그인
          </button>
        </li>
      ) : (
        <>
          <li className=" auth-btn-hover">
            <button className="w-full" onClick={signOut}>
              로그아웃
            </button>
          </li>
          <li className=" auth-btn-hover">
            <button className="w-full" onClick={myPageRoute}>
              My
            </button>
          </li>
        </>
      )}
    </ul>
  );
}
