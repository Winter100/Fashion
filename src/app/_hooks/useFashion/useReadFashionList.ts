import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { useQueryString } from "../useQueryString";
import { readFashionListApi } from "@/app/_api/fashionApi";

export default function useReadFashionList() {
  const params = useParams();

  const { page, validStart, validEnd } = useQueryString();

  const tag = params?.tag as string;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [tag, page, validStart, validEnd],
    queryFn: () => readFashionListApi(tag, page, validStart, validEnd),
  });

  return { data, isLoading, isError, error, validStart, validEnd };
}
