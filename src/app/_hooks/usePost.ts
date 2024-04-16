import { useRouter } from "next/navigation";
import { PostData } from "../_types/type";
import { useMutation } from "@tanstack/react-query";
import { postFashionItem as postFashionItemApi } from "../_tanstack/postFashionItem";

export default function usePost() {
  const router = useRouter();
  const { mutate: postFashion, isPending } = useMutation({
    mutationFn: ({ user, title, content, concept, image }: PostData) =>
      postFashionItemApi({ user, title, content, concept, image }),
    onSuccess: () => {
      router.replace("/fashion?page=1");
    },
  });

  return { postFashion, isPending };
}
