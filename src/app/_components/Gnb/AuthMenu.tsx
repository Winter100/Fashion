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
        <LeftBarLink href="/auth/signin" tag={TAG_NAME.signin}>
          <VscSignIn />
        </LeftBarLink>
      ) : (
        <>
          <LeftBarLink href="/mypage" tag={TAG_NAME.mypage}>
            <CiHome />
          </LeftBarLink>

          <div
            className="auth-btn-hover flex cursor-pointer items-center justify-center gap-2 text-fontColor/30"
            onClick={signOut}
          >
            <VscSignOut />
            <span className="hidden text-2xl lg:block lg:text-2xl">
              로그아웃
            </span>
          </div>
        </>
      )}
    </>
  );
}
