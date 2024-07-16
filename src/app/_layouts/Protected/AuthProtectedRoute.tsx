"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { useUser } from "@/app/_hooks/useAuth";
import LoadingSpinner from "@/app/_components/Common/LoadingSpinner";

// 비로그인시 들어올 수 없는 페이지 (글쓰기, 수정, 마이페이지)
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
      router.replace("/auth/signin");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading || !isAuthenticated) return <LoadingSpinner />;

  if (isAuthenticated) return <>{children}</>;
}
