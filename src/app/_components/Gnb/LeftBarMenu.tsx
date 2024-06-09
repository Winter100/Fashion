"use client";

import { IoShirtOutline } from "react-icons/io5";
import { RiTShirtAirFill } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";
import { GoPencil } from "react-icons/go";

import { TAG_NAME } from "@/app/_constant/constant";
import { useQueryString } from "@/app/_hooks/useQueryString";
import { setFashionRoute } from "@/app/_utils/setFashionRoute";
import LeftBarLink from "./Link/LeftBarLink";

export default function LeftBarMenu() {
  const { validStart, validEnd } = useQueryString();

  return (
    <>
      <LeftBarLink
        href={setFashionRoute(
          TAG_NAME.fashion,
          TAG_NAME.today,
          1,
          validStart,
          validEnd,
        )}
        tag={TAG_NAME.today}
      >
        <IoShirtOutline />
      </LeftBarLink>

      <LeftBarLink
        href={setFashionRoute(
          TAG_NAME.fashion,
          TAG_NAME.tomorrow,
          1,
          validStart,
          validEnd,
        )}
        tag={TAG_NAME.tomorrow}
      >
        <RiTShirtAirFill />
      </LeftBarLink>

      <LeftBarLink
        href={setFashionRoute(
          TAG_NAME.fashion,
          TAG_NAME.this,
          1,
          validStart,
          validEnd,
        )}
        tag={TAG_NAME.this}
      >
        <GiClothes />
      </LeftBarLink>

      <LeftBarLink href="/write" tag="write">
        <GoPencil />
      </LeftBarLink>
    </>
  );
}
