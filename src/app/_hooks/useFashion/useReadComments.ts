import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { readCommentsApi } from "@/app/_api/fashionApi";

export default function useReadComments() {
  const { tag, id }: { tag: string; id: string } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [`comments`, tag, id],
    queryFn: () => readCommentsApi(id, tag),
  });

  return { data, isLoading, isError, error };
}
