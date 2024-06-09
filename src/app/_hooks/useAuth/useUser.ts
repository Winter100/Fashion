import { useQuery } from "@tanstack/react-query";

import { AUTH_KEY } from "@/app/_constant/constant";
import { getUserApi } from "@/app/_api/authApi";

export default function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: [AUTH_KEY],
    queryFn: getUserApi,
    staleTime: Infinity,
  });

  const isAuthenticated = user?.role === "authenticated";
  const user_id = user?.id;

  return { user, isLoading, isAuthenticated, user_id };
}
