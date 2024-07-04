"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Dropdown } from "flowbite-react";
import { IoMenuOutline } from "react-icons/io5";

import DarkModeToggleBtn from "../Button/DarkModeToggleBtn";

import { TAG_NAME } from "@/app/_constant/constant";
import { convertToTag } from "@/app/_utils/convertToTag";
import { setFashionRoute } from "@/app/_utils/setFashionRoute";
import { useQueryString, useRouteName } from "@/app/_hooks/useQueryString";
import { useSignOut } from "@/app/_hooks/useAuth";
import { useUserContextData } from "@/app/_provider/UserContextProvider";
import { useRouteChange } from "@/app/_hooks/useRouteChange";

const MENU_ITEMS = [
  { name: TAG_NAME.today },
  { name: TAG_NAME.tomorrow },
  { name: TAG_NAME.this },
];

const AUTH_ITEMS = [
  { name: TAG_NAME.signin, auth: false },
  { name: TAG_NAME.mypage, auth: true },
  { name: TAG_NAME.signout, auth: true },
];

export default function MobileMenu() {
  const { page, validStart, validEnd } = useQueryString();
  const navigateTo = useRouteChange();
  const { routeName } = useRouteName();
  const pathName = usePathname();
  const [labelValue, setLabelValue] = useState("");

  const { signout: signoutMutation } = useSignOut();
  const { userData, clearLoginData } = useUserContextData();

  const isAuthenticated = userData?.aud === "authenticated";

  useEffect(() => {
    setLabelValue(convertToTag(routeName));
  }, [routeName]);

  function handleItemClick(tag: string) {
    if (tag === TAG_NAME.signout) {
      signoutMutation();
      clearLoginData();
    } else if (tag === TAG_NAME.write) {
      navigateTo(`/${TAG_NAME.write}`);
    } else {
      navigateTo(
        tag === TAG_NAME.signin
          ? `/auth/${tag}`
          : tag === TAG_NAME.mypage
            ? `/${tag}`
            : setFashionRoute(
                TAG_NAME.fashion,
                tag,
                page,
                validStart,
                validEnd,
              ),
      );
    }
  }

  function renderMenuItem(item: { name: string }) {
    return (
      <Dropdown.Item
        key={item.name}
        onClick={() => handleItemClick(item.name)}
        className="flex  flex-col items-center justify-center"
      >
        <span
          className={
            pathName.includes(item.name) ? "text-selectedOrHoverColor" : ""
          }
        >
          {convertToTag(item.name)}
        </span>
      </Dropdown.Item>
    );
  }

  return (
    <Dropdown
      label={
        labelValue ? (
          <span className="w-16 text-xl text-selectedOrHoverColor">
            {labelValue}
          </span>
        ) : (
          <IoMenuOutline />
        )
      }
      inline
    >
      <Dropdown.Item className="flex items-center justify-center">
        <DarkModeToggleBtn as="span" />
      </Dropdown.Item>
      <Dropdown.Divider />
      {MENU_ITEMS.map(renderMenuItem)}
      {isAuthenticated && renderMenuItem({ name: TAG_NAME.write })}
      <Dropdown.Divider />
      {AUTH_ITEMS.filter((item) => item.auth === isAuthenticated).map(
        renderMenuItem,
      )}
    </Dropdown>
  );
}
