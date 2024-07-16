import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { readComments as readCommentsLib } from "@/app/_lib/supabase/fashion";

export default function useReadComments() {
  const { tag, id }: { tag: string; id: string } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [`comments`, tag, id],
    queryFn: () => readCommentsLib(id, tag),
  });

  return { data, isLoading, isError, error };
}
