import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { getFashionEditItem as fashionEditItemApi } from "../_utils/apiFashion";
import useUser from "./useUser";

export default function useEditData() {
  const { id }: { id: string } = useParams();
  const { user } = useUser();

  const { data, isLoading, isError } = useQuery({
    queryKey: [`detail`, id],
    queryFn: () => fashionEditItemApi(id as string, user?.id),
  });

  return { id, data, isLoading, isError };
}
