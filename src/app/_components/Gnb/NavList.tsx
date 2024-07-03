"use client";

import { IoShirtOutline } from "react-icons/io5";
import { RiTShirtAirFill } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";

import MenuItem from "./Link/MenuItem";

import { TAG_NAME } from "@/app/_constant/constant";
import { setFashionRoute } from "@/app/_utils/setFashionRoute";
import { useRouteChange } from "@/app/_hooks/useRouteChange";
import { convertToTag } from "@/app/_utils/convertToTag";

const NAV_ITEMS = [
  { tag: TAG_NAME.today, Icon: IoShirtOutline },
  { tag: TAG_NAME.tomorrow, Icon: RiTShirtAirFill },
  { tag: TAG_NAME.this, Icon: GiClothes },
];

export default function NavList() {
  const navigateTo = useRouteChange();
  return (
    <>
      {NAV_ITEMS.map(({ tag, Icon }) => (
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
      ))}
    </>
  );
}
