"use client";

import { useState } from "react";
import Link from "next/link";

export default function Title() {
  const [isHover, setIsHover] = useState(false);

  const hover = isHover ? "text-blue-600" : "text-gray-500";

  return (
    <Link
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      href={"/fashion?page=1"}
      className="flex flex-col items-center justify-center gap-1 text-6xl "
    >
      <div className=" text-3xl">
        <span className="text-blue-600">오늘</span>
        <span> 어때?</span>
      </div>
      <div
        className={`hidden text-center text-xl opacity-70 transition-colors duration-500 xl:block ${hover}`}
      >
        오늘 하루의 패션을 기록해보세요!
      </div>
    </Link>
  );
}
