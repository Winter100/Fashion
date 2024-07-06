"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { IoMenuOutline, IoShirtOutline } from "react-icons/io5";
import { RiTShirtAirFill } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";
import { CiHome } from "react-icons/ci";
import { GoPencil } from "react-icons/go";

import Title from "./Title";
import Search from "./Search";
import MenuItem from "./Link/MenuItem";
import AuthMenu from "./AuthMenu";
import DarkModeToggleBtn from "../Button/DarkModeToggleBtn";
import { CalendarFilter } from "../Modal/ModalCalendar";
import { TAG_NAME } from "@/app/_constant/constant";
import { useRouteChange } from "@/app/_hooks/useRouteChange";
import { setFashionRoute } from "@/app/_utils/setFashionRoute";
import { convertToTag } from "@/app/_utils/convertToTag";
import { useUserContextData } from "@/app/_provider/UserContextProvider";
import { useQueryString } from "@/app/_hooks/useQueryString";

const NAV_ITEMS = [
  { tag: TAG_NAME.today, Icon: IoShirtOutline },
  { tag: TAG_NAME.tomorrow, Icon: RiTShirtAirFill },
  { tag: TAG_NAME.this, Icon: GiClothes },
];

export default function PcMenu() {
  const navigateTo = useRouteChange();
  const { userData } = useUserContextData();
  const { page, validStart, validEnd } = useQueryString();

  const { email, name } = userData?.user_metadata
    ? userData?.user_metadata
    : { email: null, name: "게스트" };

  return (
    <Navbar
      className="layout-max-width hidden h-full items-center md:flex"
      style={{
        backgroundColor: "var(--background)",
      }}
      rounded
    >
      <div>
        <Title />
      </div>

      <div className="ml-4 flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar img={IoMenuOutline} rounded bordered />}
        >
          <span className="flex items-center justify-center px-2">
            <DarkModeToggleBtn />
          </span>
          <Dropdown.Divider />
          {email && (
            <Dropdown.Header>
              <span className="block text-center text-sm">{name}</span>
              <span className="block truncate text-sm font-medium">
                {email}
              </span>
            </Dropdown.Header>
          )}
          {userData && (
            <>
              <Dropdown.Item className=" p-1">
                <MenuItem
                  className="h-full w-full "
                  as="span"
                  label={TAG_NAME.write}
                  onClick={() => navigateTo(`/${TAG_NAME.write}`)}
                >
                  <span className="flex items-center gap-1 px-2">
                    <GoPencil />
                    {convertToTag(TAG_NAME.write)}
                  </span>
                </MenuItem>
              </Dropdown.Item>
              <Dropdown.Item className=" p-1">
                <MenuItem
                  className="h-full w-full "
                  as="span"
                  label={TAG_NAME.mypage}
                  onClick={() => navigateTo(`/${TAG_NAME.mypage}`)}
                >
                  <span className="flex items-center gap-1 px-2">
                    <CiHome />
                    {convertToTag(TAG_NAME.mypage)}
                  </span>
                </MenuItem>
              </Dropdown.Item>

              <Dropdown.Divider />
            </>
          )}
          <Dropdown.Item className=" p-1">
            <AuthMenu />
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      <div className="flex h-full w-[500px] flex-col">
        <div className="flex items-center">
          <CalendarFilter />

          <Search />
        </div>

        <Navbar.Collapse>
          <div className="mt-3 flex w-full items-center justify-around">
            {NAV_ITEMS.map(({ tag, Icon }) => (
              <MenuItem
                key={tag}
                label={tag}
                onClick={() =>
                  navigateTo(
                    setFashionRoute(
                      TAG_NAME.fashion,
                      tag,
                      page,
                      validStart,
                      validEnd,
                    ),
                  )
                }
              >
                <span className="flex items-center gap-1 text-xl">
                  <Icon />
                  {convertToTag(tag)}
                </span>
              </MenuItem>
            ))}
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
