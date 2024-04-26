"use client";

import { useDarkMode } from "../Provider/DarkModeProvider";
import ModeToggleBtn from "./ModeToggleBtn";

export default function DarkModeToggleBtn() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className=" hover:bg-toggleBackground/90 rounded-lg"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <ModeToggleBtn src="light" />
      ) : (
        <ModeToggleBtn src="dark" />
      )}
    </button>
  );
}
