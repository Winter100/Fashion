import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getFashionList as FashionListApi } from "../_utils/apiFashion";

export default function useFashion() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const { data, isLoading } = useQuery({
    queryKey: ["fashion", page],
    queryFn: FashionListApi,
  });

  return { data, isLoading };
}
