import { useQuery } from "@tanstack/react-query";

import { AUTH_KEY } from "@/app/_constant/constant";
import { getUser as getUserLib } from "@/app/_lib/supabase/auth";

export default function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: [AUTH_KEY],
    queryFn: getUserLib,
    staleTime: Infinity,
  });

  const isAuthenticated = user?.role === "authenticated";
  const user_id = user?.id;

  return { user, isLoading, isAuthenticated, user_id };
}
