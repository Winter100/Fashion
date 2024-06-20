"use client";

import { usePathname, useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <button
      className={`auth-btn-hover ${pathName.includes(tag) ? "text-fontColor" : "text-fontColor/30"}`}
      onClick={() => router.push(href)}
    >
      <div>
        <span className=" flex items-center justify-center gap-2">
          <p>{children}</p>
          <p className="hidden text-2xl lg:block lg:text-2xl">
            {convertToTag(tag)}
          </p>
        </span>
      </div>
    </button>
  );
}
