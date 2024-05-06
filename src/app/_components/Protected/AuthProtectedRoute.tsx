"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { useUser } from "@/app/_hooks/useAuth";

import LoadingSpinner from "../Spinner/LoadingSpinner";

// 비로그인시 들어올 수 없는 페이지 (글쓰기, 수정)
export default function AuthProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast.warn("로그인이 필요합니다!");
      router.push("/auth/signin");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) return <LoadingSpinner />;

  if (isAuthenticated) return <>{children}</>;
}
