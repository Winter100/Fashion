import { useQuery } from "@tanstack/react-query";
import { getAuth } from "../_utils/apiAuth";

export default function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: getAuth,
    staleTime: Infinity,
  });

  const isAuthenticated = user?.role === "authenticated";

  return { user, isLoading, isAuthenticated };
}
