import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getFashionItem } from "../_tanstack/getFashionItem";

export default function useDetail() {
  const params = useParams();
  const { id: fashionId } = params;

  const { data, isLoading } = useQuery({
    queryKey: [`detail`, fashionId],
    queryFn: () => getFashionItem(fashionId as string),
  });

  return { fashionId, data, isLoading };
}
