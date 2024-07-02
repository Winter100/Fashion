"use client";

import { GoPencil } from "react-icons/go";
import { CiHome } from "react-icons/ci";

import { useRouteChange } from "@/app/_hooks/useRouteChange";
import { useUserContextData } from "@/app/_provider/UserContextProvider";
import { TAG_NAME } from "@/app/_constant/constant";
import MenuItem from "./Link/MenuItem";

export default function RecordMenu() {
  const { userData } = useUserContextData();
  const isAuthenticated = userData?.aud === "authenticated";

  const navigateTo = useRouteChange();
  return (
    <>
      {isAuthenticated && (
        <>
          <MenuItem
            label={TAG_NAME.write}
            onClick={() => navigateTo(`/${TAG_NAME.write}`)}
          >
            <span className="flex items-center  gap-1">
              <GoPencil /> 기록남기기
            </span>
          </MenuItem>
          <MenuItem
            label={TAG_NAME.mypage}
            onClick={() => navigateTo(`/${TAG_NAME.mypage}`)}
          >
            <span className="flex items-center  gap-1">
              <CiHome /> 마이페이지
            </span>
          </MenuItem>
        </>
      )}
    </>
  );
}
