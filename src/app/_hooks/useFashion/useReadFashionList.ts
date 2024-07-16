import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { readFashionList as readFashionListLib } from "@/app/_lib/supabase/fashion";
import { useQueryString } from "../useQueryString";

export default function useReadFashionList() {
  const params = useParams();

  const { page, validStart, validEnd } = useQueryString();

  const tag = params?.tag as string;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [tag, page, validStart, validEnd],
    queryFn: () => readFashionListLib(tag, page, validStart, validEnd),
  });

  return { data, isLoading, isError, error, validStart, validEnd };
}
