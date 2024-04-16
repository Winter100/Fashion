import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { deleteFashionItem as deleteFashionItemApi } from "../_tanstack/deleteFashionItem";

export default function useDelete() {
  const router = useRouter();
  const { mutate: deleteFashion, isPending } = useMutation({
    mutationFn: ({ id }: { id: string }) => deleteFashionItemApi({ id }),
    onSuccess: () => {
      router.replace("/fashion?page=1");
    },
  });

  return { deleteFashion, isPending };
}
