import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { IMAGE_MAX_SIZE, TAG_NAME } from "@/app/_constant/constant";
import { inputType, UpdateDataFn } from "@/app/_types/type";
import { setFashionRoute } from "@/app/_utils/setFashionRoute";
import { updateFashionApi } from "@/app/_api/fashionApi";
import { useLoading } from "../useLoading";
import imgCompression from "@/app/_utils/imgCompression";

export default function useUpdate() {
  const { tag, id } = useParams<{ tag: string; id: string }>();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { isLoading: submitLoading, setLoading: setSubmitLoading } =
    useLoading();

  const { mutate: updateFashion } = useMutation({
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

  async function onSubmit(value: inputType) {
    setSubmitLoading(true);

    const { title, content, imageFile } = value;
    if (imageFile === null || !imageFile[0]) {
      try {
        updateFashion({ title, content });
      } catch (e) {}
    } else if (imageFile[0]?.size >= IMAGE_MAX_SIZE) {
      return alert("이미지가 5MB를 초과했습니다 다른 이미지를 선택해주세요.");
    } else {
      try {
        const compressionImage = await imgCompression(imageFile[0]);
        updateFashion({ title, content, image: compressionImage });
      } catch (e) {}
    }
    return setSubmitLoading(false);
  }

  return { onSubmit, submitLoading };
}
