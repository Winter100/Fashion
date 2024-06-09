"use client";

import { usePathname } from "next/navigation";

import { CalendarFilter } from "../_components/Modal/ModalCalendar";
import Search from "../_components/Gnb/Search";
import MobileMenu from "../_components/Gnb/MobileMenu";

export default function TopGnb() {
  const pathName = usePathname();
  const fashion = pathName.includes("fashion");
  return (
    <div className="fixed top-0 z-10 flex h-16 w-full items-center justify-center bg-backgroundOne">
      <div className="block md:hidden">{fashion && <CalendarFilter />}</div>

      <div className="mx-1 w-64">
        <Search />
      </div>

      <div className="hidden md:block">{fashion && <CalendarFilter />}</div>

      <div className="block text-3xl md:hidden">
        <MobileMenu />
      </div>
    </div>
  );
}
