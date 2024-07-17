"use client";

import { PiSun, PiMoon } from "react-icons/pi";

import { useDarkMode } from "@/app/_provider/DarkModeProvider";
import MenuItem from "./MenuItem";

export default function DarkModeToggleBtn({
  as = "button",
}: {
  as?: "button" | "span";
}) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <MenuItem
      className="flex h-6 w-6 items-center justify-center"
      title="테마 바꾸기"
      as={as}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <PiSun /> : <PiMoon />}
    </MenuItem>
  );
}
