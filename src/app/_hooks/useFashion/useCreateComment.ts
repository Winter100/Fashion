import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import { User } from "@supabase/supabase-js";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createComment as createCommentLib } from "@/app/_lib/supabase/fashion";

export default function useCreateComment() {
  const queryClient = useQueryClient();
  const { id: fashionId, tag }: { id: string; tag: string } = useParams();

  const { mutate: createComment } = useMutation({
    mutationFn: ({
      content,
      user,
      parent_id,
    }: {
      user: User;
      content: string;
      parent_id: string | null;
    }) => createCommentLib({ user, tag, content, fashionId, parent_id }),
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
