"use client";

import { Dropdown } from "flowbite-react";
import { IoMenuOutline } from "react-icons/io5";

import useMobile from "@/app/_hooks/useMobile";
import DarkModeToggleBtn from "../Common/DarkModeToggleBtn";
import { convertToTag } from "@/app/_lib/utils/convertToTag";
import { TAG_NAME } from "@/app/_constant/constant";

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
  const { handleItemClick, pathName, labelValue, isAuthenticated } =
    useMobile();

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
