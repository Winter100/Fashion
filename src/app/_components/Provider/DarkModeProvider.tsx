"use client";

import { useLocalStorageState } from "@/app/_hooks/useLocalStorageState";
import { createContext, useContext, useEffect } from "react";

const DarkModeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export default function DarkMode({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode",
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((pre: boolean) => !pre);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) throw new Error("DarkModeContext를 벗어났습니다.");
  return context;
}
