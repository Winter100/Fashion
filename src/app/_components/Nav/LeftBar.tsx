import dynamic from "next/dynamic";

import DarkModeToggleBtn from "../DarkMode/DarkModeToggleBtn";
import AuthBar from "./AuthBar";
import Title from "./Title";

const DynamicLeftBarMenu = dynamic(() => import("../Menu/LeftBarMenu"), {
  ssr: false,
});

export default function LeftBar() {
  return (
    <nav className="flex h-full w-full flex-col items-center justify-between sm:pb-40">
      <header className="flex h-16 items-center justify-center border-borderColorOne/20">
        <Title />
      </header>

      <ul className=" flex w-full flex-col items-center justify-center gap-20 text-4xl">
        <DynamicLeftBarMenu />
      </ul>
      <div className=" flex w-full items-center justify-center border-borderColorOne/20  ">
        <DarkModeToggleBtn />
      </div>

      <div className=" flex w-full items-center justify-center border-borderColorOne/20 text-2xl">
        <AuthBar />
      </div>
    </nav>
  );
}
