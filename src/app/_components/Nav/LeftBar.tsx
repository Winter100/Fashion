"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import DarkModeToggleBtn from "../DarkMode/DarkModeToggleBtn";
import AuthBar from "./AuthBar";
import Title from "./Title";

import { menu } from "./menu";

export default function LeftBar() {
  const pathName = usePathname();
  return (
    <nav className="h-full w-full">
      <header className="border-borderColorOne/20 flex items-center justify-center border-b  sm:h-36">
        <Title />
      </header>

      <ul className=" flex flex-col items-center justify-center gap-4  text-4xl sm:h-[50rem]">
        {menu.map((li) => (
          <Link
            className={`auth-btn-hover ${pathName.includes(li.filter) ? "text-fontColor/95" : "text-fontColor/20"}`}
            href={li.href}
            key={li.name}
          >
            <li>{li.name}</li>
          </Link>
        ))}
      </ul>

      <div className=" border-borderColorOne/20 flex items-center justify-center border-t  sm:h-12">
        <DarkModeToggleBtn />
      </div>

      <div className=" border-borderColorOne/20 flex items-center justify-center border-b border-t   text-2xl sm:h-12">
        <AuthBar />
      </div>
    </nav>
  );
}
