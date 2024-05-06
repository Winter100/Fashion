"use client";
import { PiSun, PiMoon } from "react-icons/pi";

import { useDarkMode } from "../Provider/DarkModeProvider";

export default function DarkModeToggleBtn() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      title="테마 바꾸기"
      className="rounded-lg hover:bg-toggleBackground/90"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <PiSun className=" text-3xl" />
      ) : (
        <PiMoon className=" text-3xl" />
      )}
    </button>
  );
}
