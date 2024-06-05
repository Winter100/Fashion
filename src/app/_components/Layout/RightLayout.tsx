"use client";

import { useState } from "react";

import { MdMenu } from "react-icons/md";

export default function RightLayout({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [view, setView] = useState(false);

  function onChangeView() {
    setView((pre) => !pre);
  }

  return (
    <div
      className={`${view ? "w-60" : "w-auto"} right-0 z-30 h-full border bg-black sm:fixed sm:block ${className}`}
      // className={`${view ? "" : ""} right-0 z-30 h-full w-28 border sm:fixed sm:block sm:w-44 md:w-48 xl:w-60 ${className}`}
    >
      <div className="  flex h-16 items-center justify-end">
        <button onClick={onChangeView} className="mr-10 text-3xl">
          <MdMenu />
        </button>
      </div>

      {view && children}
    </div>
  );
}
// export default function RightLayout({
//   children,
//   className = "right-0 hidden h-full w-28 sm:fixed sm:block sm:w-44 md:w-48 xl:w-60",
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) {
//   return <div className={className}>{children}</div>;
// }
