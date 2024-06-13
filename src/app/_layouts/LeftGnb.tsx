import Title from "../_components/Gnb/Title";
import LeftBarMenu from "../_components/Gnb/LeftBarMenu";
import AuthMenu from "../_components/Gnb/AuthMenu";
import DarkModeToggleBtn from "../_components/Button/DarkModeToggleBtn";

export default function LeftGnb() {
  return (
    <nav className=" h-full w-full ">
      <header className="flex h-16 items-center justify-center">
        <Title />
      </header>

      <div className="flex h-full w-full flex-col">
        <ul className="flex w-full flex-1 flex-col items-center justify-center gap-20 text-3xl">
          <LeftBarMenu />
          <AuthMenu />
          <DarkModeToggleBtn />
        </ul>
      </div>
    </nav>
  );
}
