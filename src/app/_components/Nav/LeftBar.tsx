import dynamic from "next/dynamic";

import DarkModeToggleBtn from "../DarkMode/DarkModeToggleBtn";
import AuthBar from "./AuthBar";
import Title from "./Title";

const DynamicLeftBarMenu = dynamic(() => import("../Menu/LeftBarMenu"), {
  ssr: false,
});

export default function LeftBar() {
  return (
    <nav className=" h-full w-full ">
      <header className="flex h-16 items-center justify-center">
        <Title />
      </header>

      <div className="flex h-full w-full flex-col">
        <ul className="flex w-full flex-1 flex-col items-center justify-center gap-20 text-3xl">
          <DynamicLeftBarMenu />
          <AuthBar />
          <DarkModeToggleBtn />
        </ul>
      </div>
    </nav>
  );
}
