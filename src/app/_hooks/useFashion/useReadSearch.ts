import { useQuery } from "@tanstack/react-query";

import { useQueryString } from "../useQueryString";
import { readSearchFashionApi } from "@/app/_api/fashionApi";

export default function useReadSearch<T>() {
  const { page, q } = useQueryString();

  const { data, isLoading, isError, error } = useQuery<T[]>({
    queryKey: ["search", page, q],
    queryFn: () => readSearchFashionApi(q),
  });

  return { data, isLoading, isError, error, q };
}
