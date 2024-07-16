import PcMenu from "../Menu/PcMenu";

import { CalendarFilter } from "../Modal/ModalCalendar";
import Search from "../Common/Search";
import MobileMenu from "../Menu/MobileMenu";

export default function TopGnb() {
  return (
    <div className="fixed top-0 z-20 flex h-16 w-full flex-col items-center justify-center bg-backgroundOne md:h-28">
      <div className="w-full">
        <div className="hidden w-full items-center md:flex">
          <PcMenu />
        </div>

        <div className="flex items-center md:hidden">
          <CalendarFilter />
          <Search id="mobileSearch" />
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
