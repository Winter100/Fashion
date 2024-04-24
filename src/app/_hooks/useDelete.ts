import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { deleteFashionItem as deleteFashionItemApi } from "../_tanstack/deleteFashionItem";

export default function useDelete() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: deleteFashion, isPending } = useMutation({
    mutationFn: ({ id }: { id: string }) => deleteFashionItemApi({ id }),
    onSuccess: (id) => {
      toast.success("삭제되었습니다!");
      queryClient.removeQueries({ queryKey: ["detail", id] });
      router.replace("/fashion?page=1");
    },
    onError: () => {
      toast.error("잠시 후 다시 시도해 주세요!");
    },
  });

  return { deleteFashion, isPending };
}
