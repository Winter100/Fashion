import { useQuery } from "@tanstack/react-query";

import { useQueryString } from "../useQueryString";
import { readSearchFashion as readSearchFashionLib } from "@/app/_lib/supabase/fashion";

export default function useReadSearch<T>() {
  const { page, q } = useQueryString();

  const { data, isLoading, isError, error } = useQuery<T[]>({
    queryKey: ["search", page, q],
    queryFn: () => readSearchFashionLib(q),
  });

  return { data, isLoading, isError, error, q };
}
