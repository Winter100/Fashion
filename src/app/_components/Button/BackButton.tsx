"use client";

import { Button } from "flowbite-react";
import { ComponentProps } from "react";

interface BackButtonProps extends ComponentProps<"button"> {
  value?: string;
  color?: "green" | "light" | "gray";
}

export default function BackButton({
  value,
  className,
  color = "green",
  onClick,
}: BackButtonProps) {
  return (
    <Button
      className={`h-full ${className}`}
      onClick={onClick}
      size="md"
      color={color}
    >
      <span className="text-xl">{value ? value : "뒤로가기"}</span>
    </Button>
  );
}
