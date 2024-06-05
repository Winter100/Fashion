import Search from "../Menu/Search";
import { CalendarFilter } from "../Modal/Calendar";
import MobileMenu from "../Menu/MobileMenu";

export default function Topbar() {
  return (
    <div className="fixed top-0 z-10 flex h-16 w-full items-center justify-center bg-backgroundOne">
      <div className="mx-1 w-72">
        <Search />
      </div>

      <div className="hidden md:block">
        <CalendarFilter />
      </div>

      <div className="block text-3xl md:hidden">
        <MobileMenu />
      </div>
    </div>
  );
}
