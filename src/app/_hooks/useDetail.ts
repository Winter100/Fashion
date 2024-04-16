import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getFashionItem } from "../_tanstack/getFashionItem";

export default function useDetail() {
  const { id }: { id: string } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: [`detail`, id],
    queryFn: () => getFashionItem(id as string),
  });

  return { id, data, isLoading };
}
