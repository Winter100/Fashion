import { useQuery } from "@tanstack/react-query";
import useUser from "../useAuth/useUser";

import { readMyFashionListApi } from "@/app/_api/fashionApi";

export default function useReadMyFashionList<T>() {
  const { user } = useUser();

  const { data, isLoading, isError } = useQuery<T[]>({
    queryKey: ["MyItemList"],
    queryFn: () => readMyFashionListApi(user?.user_metadata.name),
    staleTime: Infinity,
  });

  return { data, isLoading };
}
