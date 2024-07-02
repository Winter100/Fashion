import { CalendarFilter } from "../_components/Modal/ModalCalendar";
import Search from "../_components/Gnb/Search";
import MobileMenu from "../_components/Gnb/MobileMenu";
import NavList from "../_components/Gnb/NavList";
import DarkModeToggleBtn from "../_components/Button/DarkModeToggleBtn";
import AuthMenu from "../_components/Gnb/AuthMenu";

import Title from "../_components/Gnb/Title";
import RecordMenu from "../_components/Gnb/RecordMenu";

export default function TopGnb() {
  return (
    <div className="fixed top-0 z-10 flex h-16 w-full flex-col items-center justify-center bg-backgroundOne md:h-36">
      <div className="layout-max-width hidden justify-end gap-4 py-1 text-xl md:flex">
        <div className="flex gap-4">
          <AuthMenu />
        </div>
        <DarkModeToggleBtn />
      </div>
      <div className="layout-max-width flex flex-1 items-center justify-center  ">
        <div className="hidden flex-1 items-center justify-center md:flex">
          <Title />
        </div>

        <div>
          <CalendarFilter />
        </div>
        <div className="mx-1 flex-1  ">
          <Search />
        </div>
        <div className="block md:hidden">
          <MobileMenu />
        </div>

        <div className="hidden flex-1 items-center justify-center gap-4 text-xl md:flex  ">
          <RecordMenu />
        </div>
      </div>

      <nav className="layout-max-width hidden w-full flex-1 items-center md:flex">
        <ul className="flex w-full text-xl">
          <NavList />
        </ul>
      </nav>
      <div className="w-full border-b border-gray-400" />
    </div>
  );
}
