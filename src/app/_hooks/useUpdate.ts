import { useRouter } from "next/navigation";
import { UpdateData } from "../_types/type";
import { useMutation } from "@tanstack/react-query";
import { updateFashionItem } from "../_tanstack/updateFashionItem";

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
      updateFashionItem({ user, title, content, concept, image, fashionId }),
    onSuccess: () => {
      router.replace("/fashion?page=1");
    },
  });

  return { updateFashion, isPending };
}
