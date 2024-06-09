"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { convertToTag } from "@/app/_utils/convertToTag";

export default function LeftBarLink({
  href,
  tag,
  children,
}: {
  href: string;
  tag: string;
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <Link
      prefetch={false}
      className={`auth-btn-hover ${pathName.includes(tag) ? "text-fontColor" : "text-fontColor/30"}`}
      href={href}
    >
      <li>
        <span className=" flex items-center justify-center gap-2">
          <p>{children}</p>
          <p className="hidden text-2xl lg:block lg:text-2xl">
            {convertToTag(tag)}
          </p>
        </span>
      </li>
    </Link>
  );
}
