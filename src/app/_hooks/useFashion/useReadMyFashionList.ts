import { useQuery } from "@tanstack/react-query";
import useUser from "../useAuth/useUser";

import { readMyFashionListApi } from "@/app/_api/fashionApi";
import { useRouter } from "next/navigation";
import { removeFilteredValueForLocalStorage } from "@/app/_utils/localstorage";

export default function useReadMyFashionList<T>() {
  const { user } = useUser();

  const router = useRouter();

  const { data, isLoading, isError } = useQuery<T[]>({
    queryKey: ["MyItemList"],
    queryFn: () => readMyFashionListApi(user?.user_metadata.name),
    staleTime: Infinity,
  });

  function handleRoute() {
    router.push("/mypage/list");
    removeFilteredValueForLocalStorage();
  }

  return { data, isLoading, isError, handleRoute };
}
