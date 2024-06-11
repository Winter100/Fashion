"use client";

import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";

export default function BackButton({
  value,
  className,
  color = "green",
}: {
  value?: string;
  className?: string;
  color?: "green" | "light" | "gray";
}) {
  const router = useRouter();

  return (
    <Button
      className={`h-full ${className}`}
      onClick={() => router.back()}
      size="md"
      color={color}
    >
      <span className="text-xl">{value ? value : "뒤로가기"}</span>
    </Button>
  );
}
