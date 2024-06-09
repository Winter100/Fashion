import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { TAG_NAME } from "@/app/_constant/constant";
import { UpdateDataFn } from "@/app/_types/type";
import { setFashionRoute } from "@/app/_utils/setFashionRoute";
import { updateFashionApi } from "@/app/_api/fashionApi";

export default function useUpdate() {
  const { tag, id }: { tag: string; id: string } = useParams();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: updateFashion, isPending } = useMutation({
    mutationFn: ({ title, content, image }: UpdateDataFn) =>
      updateFashionApi({ title, content, tag, image, id }),
    onSuccess: () => {
      toast.success("수정이 완료되었습니다.");
      queryClient.invalidateQueries();
      router.back();
    },
    onError: (e) => {
      toast.error("잠시 후 다시 시도해 주세요!");
      router.replace(setFashionRoute(TAG_NAME.fashion, tag));
    },
  });

  return { updateFashion, isPending };
}
