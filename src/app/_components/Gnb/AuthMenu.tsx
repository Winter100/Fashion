"use client";

import { CiHome } from "react-icons/ci";
import { VscSignIn } from "react-icons/vsc";
import { VscSignOut } from "react-icons/vsc";

import { TAG_NAME } from "@/app/_constant/constant";
import { useUserContextData } from "@/app/_provider/UserContextProvider";
import { useSignOut } from "@/app/_hooks/useAuth";
import LeftBarLink from "./Link/LeftBarLink";

export default function AuthMenu() {
  const { signout: signoutMutation } = useSignOut();
  const { userData, clearLoginData } = useUserContextData();

  function signOut() {
    signoutMutation();
    clearLoginData();
  }
  const isAuthenticated = userData?.aud === "authenticated";

  return (
    <>
      {!isAuthenticated ? (
        <li className="flex w-full items-center justify-center">
          <LeftBarLink href="/auth/signin" tag={TAG_NAME.signin}>
            <VscSignIn />
          </LeftBarLink>
        </li>
      ) : (
        <>
          <li className="flex w-full items-center justify-center">
            <LeftBarLink href="/mypage" tag={TAG_NAME.mypage}>
              <CiHome />
            </LeftBarLink>
          </li>

          <li className="auth-btn-hover flex w-full cursor-pointer items-center justify-center text-neutral-400">
            <button
              className="flex items-center justify-center gap-2"
              onClick={signOut}
            >
              <VscSignOut />
              <span className="hidden text-2xl lg:block lg:text-2xl">
                로그아웃
              </span>
            </button>
          </li>
        </>
      )}
    </>
  );
}
