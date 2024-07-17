import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { readFashion as readFashionLib } from "@/app/_lib/supabase/fashion";

export default function useReadDetail() {
  const { tag, id }: { tag: string; id: string } = useParams();
  const router = useRouter();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [`detail`, tag, id],
    queryFn: () => readFashionLib(id, tag),
  });

  return { data, isLoading, isError, error, router };
}
