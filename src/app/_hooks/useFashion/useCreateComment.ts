import { useParams } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { User } from "@supabase/supabase-js";
import { createCommentApi } from "@/app/_api/fashionApi";

export default function useCreateComment() {
  const queryClient = useQueryClient();
  const { id: fashionId, tag }: { id: string; tag: string } = useParams();

  const { mutate: createComment } = useMutation({
    mutationFn: ({ content, user }: { user: User; content: string }) =>
      createCommentApi({ user, tag, content, fashionId }),
    onSuccess: () => {
      toast.success("댓글을 기록했습니다!");
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
    onError: (error) => {
      toast.error("댓글 기록을 실패했습니다.");
    },
  });

  return { createComment };
}
