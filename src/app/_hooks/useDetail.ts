import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getFashionItem as FashionItemApi } from "../_utils/apiFashion";

export default function useDetail() {
  const { id }: { id: string } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: [`detail`, id],
    queryFn: () => FashionItemApi(id as string),
  });

  return { id, data, isLoading };
}
