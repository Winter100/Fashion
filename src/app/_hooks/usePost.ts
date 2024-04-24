import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { PostData } from "../_types/type";
import { postFashionItem as postFashionItemApi } from "../_tanstack/postFashionItem";

export default function usePost() {
  const router = useRouter();
  const { mutate: postFashion } = useMutation({
    mutationFn: ({ user, title, content, concept, image }: PostData) =>
      postFashionItemApi({ user, title, content, concept, image }),
    onSuccess: () => {
      toast.success("패션을 기록했습니다!");
      router.push("/fashion?page=1");
    },
    onError: () => {
      toast.error("패션 기록을 실패했습니다.");
    },
  });

  return { postFashion };
}
