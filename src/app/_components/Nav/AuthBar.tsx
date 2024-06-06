"use client";

import { CiHome } from "react-icons/ci";

import { useSignout } from "@/app/_hooks/useAuth";
import { TAG_NAME } from "@/app/_utils/constant";

import { useUserContextData } from "../Provider/UserContextProvider";
import LeftBarLink from "../Menu/LeftBarLink";

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
        <LeftBarLink href="/auth/signin" tag={TAG_NAME.signin}>
          {""}
        </LeftBarLink>
      ) : (
        <>
          <LeftBarLink href="/mypage" tag={TAG_NAME.mypage}>
            <CiHome />
          </LeftBarLink>

          <div
            className="auth-btn-hover cursor-pointer text-fontColor/30"
            onClick={signOut}
          >
            로그아웃
          </div>
        </>
      )}
    </>
  );
}
