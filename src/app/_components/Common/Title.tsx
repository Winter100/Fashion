"use client";

import { useState } from "react";
import Link from "next/link";

import { TAG_NAME } from "@/app/_constant/constant";
import { setFashionRoute } from "@/app/_lib/utils/setFashionRoute";

export default function Title() {
  const [isHover, setIsHover] = useState(false);

  const hover = isHover ? "text-blue-600" : "text-gray-500";

  return (
    <Link
      prefetch={false}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      href={setFashionRoute(TAG_NAME.fashion, TAG_NAME.today)}
      className="flex flex-col items-center justify-center"
    >
      <div className=" text-3xl">
        <span className="text-blue-600">이 옷</span>
        <span> 어때?</span>
      </div>
      <div
        className={`hidden text-center text-xl transition-colors duration-500 xl:block ${hover}`}
      >
        하루의 패션을 기록해보세요!
      </div>
    </Link>
  );
}
