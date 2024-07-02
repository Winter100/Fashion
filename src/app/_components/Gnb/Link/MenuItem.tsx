"use client";

import { ComponentProps } from "react";
import { usePathname } from "next/navigation";

import { convertToTag } from "@/app/_utils/convertToTag";

interface MenuItemProps extends ComponentProps<"button"> {
  children?: React.ReactNode;
  label?: string;
  as?: "button" | "span";
}

export default function MenuItem({
  children,
  label,
  onClick,
  className = "",
  as = "button",
  ...props
}: MenuItemProps) {
  const pathName = usePathname();
  const Tag = as;

  function accentTextColor(label?: string) {
    if (!label) return "";
    return pathName.includes(label) ? "text-selectedOrHoverColor" : "";
  }

  return (
    <Tag
      onClick={onClick}
      className={`hover:text-selectedOrHoverColor ${accentTextColor(label)} ${className}`.trim()}
      {...props}
    >
      {children ?? (label ? convertToTag(label) : "")}
    </Tag>
  );
}
