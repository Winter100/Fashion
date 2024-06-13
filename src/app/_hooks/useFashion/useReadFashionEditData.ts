import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import useUser from "../useAuth/useUser";
import { readFashionEditDataApi } from "@/app/_api/fashionApi";

export default function useReadFashionEditData() {
  const { tag, id }: { tag: string; id: string } = useParams();
  const { user } = useUser();

  const { data, isLoading, isError } = useQuery({
    queryKey: [`detail`, tag, id],
    queryFn: () => readFashionEditDataApi(id, user?.id, tag),
    staleTime: 1000,
  });

  return { id, data, isLoading, isError };
}
