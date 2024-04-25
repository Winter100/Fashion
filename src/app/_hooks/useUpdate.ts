import { useParams, useRouter } from "next/navigation";
import { UpdateData } from "../_types/type";
import { useMutation } from "@tanstack/react-query";
import { updateFashionItem as upDateFashionItemApu } from "../_utils/apiFashion";
import { toast } from "react-toastify";

export default function useUpdate() {
  const { id }: { id: string } = useParams();
  const router = useRouter();

  const { mutate: updateFashion, isPending } = useMutation({
    mutationFn: ({ title, content, concept, image, fashionId }: UpdateData) =>
      upDateFashionItemApu({ title, content, concept, image, fashionId }),
    onSuccess: () => {
      toast.success("수정이 완료되었습니다.");
      router.replace(`/fashion/detail/${id}`);
    },
    onError: (e) => {
      toast.error(e.message);
      toast.error("잠시 후 다시 시도해 주세요!");
      router.replace("/fashion?page=1");
    },
  });

  return { updateFashion, isPending };
}
