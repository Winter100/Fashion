import { CalendarFilter } from "../_components/Modal/ModalCalendar";
import Search from "../_components/Gnb/Search";
import MobileMenu from "../_components/Gnb/MobileMenu";
import Title from "../_components/Gnb/Title";

export default function TopGnb() {
  return (
    <div className="fixed top-0 z-20 flex h-16 w-full flex-col items-center justify-center bg-backgroundOne md:h-20">
      <div className="fixed left-0 hidden w-40 items-center justify-center md:flex">
        <Title />
      </div>

      <div className="layout-max-width flex items-center justify-center px-1 md:px-0  ">
        <div>
          <CalendarFilter />
        </div>
        <div className="mx-1 w-80">
          <Search />
        </div>
        <div className="block md:hidden">
          <MobileMenu />
        </div>
      </div>
      <div className="w-full border-b border-gray-400" />
    </div>
  );
}
