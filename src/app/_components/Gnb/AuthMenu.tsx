"use client";

import { TAG_NAME } from "@/app/_constant/constant";
import { useUserContextData } from "@/app/_provider/UserContextProvider";
import { useSignOut } from "@/app/_hooks/useAuth";
import { useRouteChange } from "@/app/_hooks/useRouteChange";

import MenuItem from "./Link/MenuItem";

export default function AuthMenu() {
  const navigateTo = useRouteChange();
  const { signout: signoutMutation } = useSignOut();

  const { userData, clearLoginData } = useUserContextData();
  const isAuthenticated = userData?.aud === "authenticated";

  function signOut() {
    signoutMutation();
    clearLoginData();
  }

  return (
    <>
      {!isAuthenticated ? (
        <MenuItem
          label={TAG_NAME.signin}
          onClick={() => navigateTo("/auth/signin")}
        />
      ) : (
        <>
          <MenuItem label={TAG_NAME.signout} onClick={signOut} />
        </>
      )}
    </>
  );
}
