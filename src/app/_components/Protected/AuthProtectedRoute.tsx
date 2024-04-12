"use client";

import useUser from "@/app/_hooks/useUser";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// 비로그인시 들어올 수 없는 페이지 (글쓰기, 수정)
export default function AuthProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) router.replace("/auth/signin");
  }, [isLoading, , isAuthenticated, router]);

  if (isLoading) return <LoadingSpinner />;

  if (isAuthenticated) return <>{children}</>;
}
