"use client";

import { IoShirtOutline } from "react-icons/io5";
import { RiTShirtAirFill } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";
import { GoPencil } from "react-icons/go";
import { CiHome } from "react-icons/ci";

import AuthMenu from "./AuthMenu";
import MenuItem from "./Link/MenuItem";
import DarkModeToggleBtn from "../Button/DarkModeToggleBtn";

import { TAG_NAME } from "@/app/_constant/constant";
import { convertToTag } from "@/app/_utils/convertToTag";
import { useRouteChange } from "@/app/_hooks/useRouteChange";
import { setFashionRoute } from "@/app/_utils/setFashionRoute";
import { useUserContextData } from "@/app/_provider/UserContextProvider";

const NAV_ITEMS = [
  { tag: TAG_NAME.today, Icon: IoShirtOutline },
  { tag: TAG_NAME.tomorrow, Icon: RiTShirtAirFill },
  { tag: TAG_NAME.this, Icon: GiClothes },
];

const LeftMenu = () => {
  const navigateTo = useRouteChange();
  const { userData } = useUserContextData();
  const isAuthenticated = userData?.aud === "authenticated";

  const renderNavItems = () => {
    return NAV_ITEMS.map(({ tag, Icon }) => (
      <li key={tag} className="flex items-center justify-center">
        <MenuItem
          label={tag}
          onClick={() => navigateTo(setFashionRoute(TAG_NAME.fashion, tag))}
        >
          <span className="flex items-center gap-1">
            <Icon />
            {convertToTag(tag)}
          </span>
        </MenuItem>
      </li>
    ));
  };

  const renderWriteAndMyMenuItem = () => {
    return (
      <>
        <li className="flex items-center justify-center">
          <MenuItem
            label={TAG_NAME.write}
            onClick={() => navigateTo(`/${TAG_NAME.write}`)}
            className={isAuthenticated ? "" : "invisible"}
          >
            <span className="flex items-center justify-center gap-1">
              <GoPencil />
              {convertToTag(TAG_NAME.write)}
            </span>
          </MenuItem>
        </li>
        <li className="flex items-center justify-center">
          <MenuItem
            label={TAG_NAME.mypage}
            onClick={() => navigateTo(`/${TAG_NAME.mypage}`)}
            className={isAuthenticated ? "" : "invisible"}
          >
            <span className="flex items-center justify-center gap-1">
              <CiHome />
              {convertToTag(TAG_NAME.mypage)}
            </span>
          </MenuItem>
        </li>
      </>
    );
  };

  return (
    <>
      {renderNavItems()}

      {renderWriteAndMyMenuItem()}

      <li className="flex items-center justify-center">
        <AuthMenu />
      </li>

      <li className="flex items-center justify-center">
        <DarkModeToggleBtn />
      </li>
    </>
  );
};

export default LeftMenu;
