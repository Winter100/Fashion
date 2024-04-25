import { useRouter } from "next/navigation";
import { UpdateData } from "../_types/type";
import { useMutation } from "@tanstack/react-query";
import { updateFashionItem as upDateFashionItemApu } from "../_utils/apiFashion";
import { toast } from "react-toastify";

export default function useUpdate() {
  const router = useRouter();
  const { mutate: updateFashion, isPending } = useMutation({
    mutationFn: ({
      user,
      title,
      content,
      concept,
      image,
      fashionId,
    }: UpdateData) =>
      upDateFashionItemApu({ user, title, content, concept, image, fashionId }),
    onSuccess: () => {
      toast.success("수정이 완료되었습니다.");
      router.replace("/fashion?page=1");
    },
    onError: () => {
      toast.error("잠시 후 다시 시도해 주세요!");
    },
  });

  return { updateFashion, isPending };
}
