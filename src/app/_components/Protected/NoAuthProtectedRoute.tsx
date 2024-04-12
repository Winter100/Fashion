"use client";

import useUser from "@/app/_hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingSpinner from "../Spinner/LoadingSpinner";

// 로그인시 들어올 수 없는 페이지 (로그인, 회원가입)
export default function NoAuthProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isLoading && isAuthenticated) router.replace("/");
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) return <LoadingSpinner />;

  if (!isAuthenticated) return <>{children}</>;
}
