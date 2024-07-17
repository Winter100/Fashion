"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import LoadingSpinner from "@/app/_components/Common/LoadingSpinner";
import { useUser } from "@/app/_hooks/useAuth";
import { TAG_NAME } from "@/app/_constant/constant";
import { setFashionRoute } from "@/app/_lib/utils/setFashionRoute";

// 로그인시 들어올 수 없는 페이지 (로그인, 회원가입)
export default function NoAuthProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace(setFashionRoute(TAG_NAME.fashion, TAG_NAME.today));
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading || isAuthenticated) return <LoadingSpinner />;

  if (!isAuthenticated) return <>{children}</>;
}
