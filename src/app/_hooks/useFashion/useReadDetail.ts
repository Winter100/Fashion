import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { readFashionApi } from "@/app/_api/fashionApi";

export default function useReadDetail() {
  const { tag, id }: { tag: string; id: string } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [`detail`, tag, id],
    queryFn: () => readFashionApi(id, tag),
  });

  return { data, isLoading, isError, error };
}
