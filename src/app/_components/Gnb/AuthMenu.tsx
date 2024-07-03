"use client";

import { VscSignIn } from "react-icons/vsc";
import { VscSignOut } from "react-icons/vsc";

import { TAG_NAME } from "@/app/_constant/constant";
import { useUserContextData } from "@/app/_provider/UserContextProvider";
import { useSignOut } from "@/app/_hooks/useAuth";
import { useRouteChange } from "@/app/_hooks/useRouteChange";

import MenuItem from "./Link/MenuItem";
import { convertToTag } from "@/app/_utils/convertToTag";

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
          onClick={() => navigateTo(`/auth/${TAG_NAME.signin}`)}
        >
          <span className="flex items-center gap-1">
            <VscSignIn />
            {convertToTag(TAG_NAME.signin)}
          </span>
        </MenuItem>
      ) : (
        <>
          <MenuItem label={TAG_NAME.signout} onClick={signOut}>
            <span className="flex items-center gap-1">
              <VscSignOut />
              {convertToTag(TAG_NAME.signout)}
            </span>
          </MenuItem>
        </>
      )}
    </>
  );
}
