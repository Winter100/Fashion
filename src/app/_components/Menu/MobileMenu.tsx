"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Dropdown } from "flowbite-react";
import { IoMenuOutline } from "react-icons/io5";

import { TAG_NAME } from "@/app/_utils/constant";
import { convertToTag } from "@/app/_utils/convertToTag";
import { setFashionRoute } from "@/app/_utils/setFashionRoute";
import { useRouteName } from "@/app/_hooks/useQueryString";

import DarkModeToggleBtn from "../DarkMode/DarkModeToggleBtn";
import { useSignout } from "@/app/_hooks/useAuth";
import { useUserContextData } from "../Provider/UserContextProvider";

const MenuName = [
  { name: TAG_NAME.today },
  { name: TAG_NAME.tomorrow },
  { name: TAG_NAME.this },
];

export default function MobileMenu() {
  const router = useRouter();
  const { routeName } = useRouteName();
  const convertTagName = convertToTag(routeName);

  const [labelValue, setLabelValue] = useState("");

  function handleRoute(url: string) {
    router.push(url);
  }

  const { signout: signoutMutation } = useSignout();
  const { userData, clearLoginData } = useUserContextData();

  function signOut() {
    signoutMutation();
    clearLoginData();
  }
  const isAuthenticated = userData?.aud === "authenticated";

  const labelTag = labelValue && <p className=" text-xl">{labelValue}</p>;

  useEffect(() => {
    setLabelValue(convertTagName);
  }, [convertTagName]);

  return (
    <Dropdown label={labelTag || <IoMenuOutline />} inline>
      <Dropdown.Item className="flex items-center justify-center p-1">
        <DarkModeToggleBtn className="text-xl" />
      </Dropdown.Item>

      <Dropdown.Divider />
      {MenuName.map((menu) => (
        <Dropdown.Item
          className=" flex flex-col items-center justify-center"
          key={menu.name}
          onClick={() => handleRoute(setFashionRoute("fashion", menu.name))}
        >
          {convertToTag(menu?.name)}
        </Dropdown.Item>
      ))}
      <Dropdown.Item
        onClick={() => handleRoute("/write")}
        className="flex items-center justify-center"
      >
        기록 남기기
      </Dropdown.Item>
      <Dropdown.Divider />
      {!isAuthenticated ? (
        <Dropdown.Item
          className=" flex flex-col items-center justify-center"
          onClick={() => handleRoute("/auth/signin")}
        >
          로그인
        </Dropdown.Item>
      ) : (
        <div className=" flex flex-col items-center justify-center">
          <Dropdown.Item onClick={() => handleRoute("/mypage")}>
            My
          </Dropdown.Item>

          <Dropdown.Item onClick={signOut}>로그아웃</Dropdown.Item>
        </div>
      )}
    </Dropdown>
  );
}
