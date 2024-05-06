"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoShirtOutline } from "react-icons/io5";
import { RiTShirtAirFill } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";
import { GoPencil } from "react-icons/go";

import { TAG_NAME } from "@/app/_utils/constant";
import { getRoute } from "@/app/_utils/getRoute";

export default function LeftBarMenu() {
  const pathName = usePathname();
  return (
    <>
      <Link
        className={`auth-btn-hover ${pathName.includes(TAG_NAME.today) ? "text-fontColor/95" : "text-fontColor/20"}`}
        href={getRoute(TAG_NAME.fashion, TAG_NAME.today, 1)}
      >
        <li className=" flex items-center justify-center gap-2">
          <span>
            <IoShirtOutline className="text-3xl" />
          </span>
          <span className="hidden text-2xl lg:block lg:text-2xl">
            오늘 어때?
          </span>
        </li>
      </Link>
      <Link
        className={`auth-btn-hover ${pathName.includes(TAG_NAME.tomorrow) ? "text-fontColor/95" : "text-fontColor/20"}`}
        href={getRoute(TAG_NAME.fashion, TAG_NAME.tomorrow, 1)}
      >
        <li className=" flex items-center justify-center gap-2">
          <span>
            <RiTShirtAirFill className="text-3xl" />
          </span>
          <span className="hidden text-2xl lg:block lg:text-2xl">
            내일 어때?
          </span>
        </li>
      </Link>
      <Link
        className={`auth-btn-hover ${pathName.includes(TAG_NAME.this) ? "text-fontColor/95" : "text-fontColor/20"}`}
        href={getRoute(TAG_NAME.fashion, TAG_NAME.this, 1)}
      >
        <li className=" flex items-center justify-center gap-2">
          <span>
            <GiClothes className="text-3xl" />
          </span>
          <span className="hidden text-2xl lg:block lg:text-2xl">
            이거 어때?
          </span>
        </li>
      </Link>

      <Link
        className={`auth-btn-hover ${pathName.includes("/write") ? "text-fontColor/95" : "text-fontColor/20"}`}
        href="/write"
      >
        <li className=" flex items-center justify-center gap-2">
          <span>
            <GoPencil className="text-3xl" />
          </span>
          <span className="hidden text-2xl lg:block lg:text-2xl">
            기록 남기기
          </span>
        </li>
      </Link>
    </>
  );
}
