import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteComment as deleteCommentLib } from "@/app/_lib/supabase/fashion";
import { useLoading } from "../useLoading";

export default function useDeleteComment() {
  const queryClient = useQueryClient();
  const { isLoading, setLoading } = useLoading();

  const { mutate: deleteComment } = useMutation({
    mutationFn: ({ id, tag }: { id: string; tag: string }) =>
      deleteCommentLib(id, tag),
    onSuccess: () => {
      toast.success("댓글이 삭제 됐습니다!");
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
    onError: () => {
      toast.error("잠시 후 다시 시도해 주세요!");
      setLoading(false);
    },
  });

  return { deleteComment, setLoading, isLoading };
}
