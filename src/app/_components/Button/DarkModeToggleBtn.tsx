"use client";

import { useDarkMode } from "@/app/_provider/DarkModeProvider";
import { PiSun, PiMoon } from "react-icons/pi";

export default function DarkModeToggleBtn({
  className = "text-3xl",
}: {
  className?: string;
}) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <li
      title="테마 바꾸기"
      className={`flex w-full cursor-pointer items-center justify-center rounded-2xl hover:bg-toggleBackground/90 ${className}`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <PiSun /> : <PiMoon />}
    </li>
  );
}
