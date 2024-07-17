import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import useUser from "../useAuth/useUser";
import { readMyFashionList as readMyFashionListLib } from "@/app/_lib/supabase/fashion";
import { removeFilteredValueForLocalStorage } from "@/app/_lib/utils/localstorage";

export default function useReadMyFashionList<T>() {
  const { user } = useUser();
  const router = useRouter();

  const { data, isLoading, isError } = useQuery<T[]>({
    queryKey: ["MyItemList"],
    queryFn: () => readMyFashionListLib(user?.user_metadata.name),
    staleTime: Infinity,
  });

  function handleRoute() {
    router.push("/mypage/list");
    removeFilteredValueForLocalStorage();
  }

  return { data, isLoading, isError, handleRoute };
}
