"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Dropdown } from "flowbite-react";
import { IoMenuOutline } from "react-icons/io5";

import { TAG_NAME } from "@/app/_constant/constant";
import { convertToTag } from "@/app/_utils/convertToTag";
import { setFashionRoute } from "@/app/_utils/setFashionRoute";
import { useRouteName } from "@/app/_hooks/useQueryString";
import { useSignOut } from "@/app/_hooks/useAuth";

import { useUserContextData } from "@/app/_provider/UserContextProvider";
import DarkModeToggleBtn from "../Button/DarkModeToggleBtn";

const MenuName = [
  { name: TAG_NAME.today },
  { name: TAG_NAME.tomorrow },
  { name: TAG_NAME.this },
];

export default function MobileMenu() {
  const router = useRouter();
  const { routeName } = useRouteName();
  const convertTagName = convertToTag(routeName);
  const pathName = usePathname();
  const [labelValue, setLabelValue] = useState("");

  function handleRoute(url: string) {
    router.push(url);
  }

  const { signout: signoutMutation } = useSignOut();
  const { userData, clearLoginData } = useUserContextData();

  function signOut() {
    signoutMutation();
    clearLoginData();
  }
  const isAuthenticated = userData?.aud === "authenticated";

  const labelTag = labelValue && (
    <span className="text-leftMenuColor w-16 text-xl">{labelValue}</span>
  );

  useEffect(() => {
    setLabelValue(convertTagName);
  }, [convertTagName]);

  function accentTextColor(tag: string) {
    return pathName.includes(tag) ? "text-leftMenuColor" : "";
  }

  return (
    <Dropdown label={labelTag || <IoMenuOutline />} inline>
      <Dropdown.Item className="flex items-center justify-center p-1">
        <DarkModeToggleBtn className="text-xl" />
      </Dropdown.Item>

      <Dropdown.Divider />
      {MenuName.map((menu) => (
        <Dropdown.Item
          className="flex flex-col items-center justify-center"
          key={menu.name}
          onClick={() =>
            handleRoute(setFashionRoute(TAG_NAME.fashion, menu.name))
          }
        >
          <span className={accentTextColor(menu.name)}>
            {convertToTag(menu?.name)}
          </span>
        </Dropdown.Item>
      ))}
      <Dropdown.Item
        onClick={() => handleRoute(`/${TAG_NAME.write}`)}
        className="flex items-center justify-center"
      >
        <span className={accentTextColor("/write")}>기록 남기기</span>
      </Dropdown.Item>
      <Dropdown.Divider />
      {!isAuthenticated ? (
        <Dropdown.Item
          className=" flex flex-col items-center justify-center"
          onClick={() => handleRoute("/auth/signin")}
        >
          <span className={accentTextColor("/signin")}>로그인</span>
        </Dropdown.Item>
      ) : (
        <div className=" flex flex-col items-center justify-center">
          <Dropdown.Item onClick={() => handleRoute("/mypage")}>
            <span className={accentTextColor("/mypage")}>My</span>
          </Dropdown.Item>

          <Dropdown.Item onClick={signOut}>로그아웃</Dropdown.Item>
        </div>
      )}
    </Dropdown>
  );
}
