import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createFashion as createFashionLib } from "@/app/_lib/supabase/fashion";
import imgCompression from "@/app/_lib/utils/imgCompression";
import { useLoading } from "../useLoading";
import { useUser } from "../useAuth";
import { setFashionRoute } from "@/app/_lib/utils/setFashionRoute";
import { TAG_NAME } from "@/app/_constant/constant";
import { inputType, PostData } from "@/app/_types/type";

export default function useCreate() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { isLoading: submitLoading, setLoading: setSubmitLoading } =
    useLoading();
  const { user } = useUser();

  const { mutate: createFashion } = useMutation({
    mutationFn: ({ user, title, content, tag, image }: PostData) =>
      createFashionLib({ user, title, content, tag, image }),
    onSuccess: (tag) => {
      toast.success("패션을 기록했습니다!");
      queryClient.invalidateQueries();
      router.push(setFashionRoute(TAG_NAME.fashion, tag));
    },
    onError: () => {
      toast.error("패션 기록을 실패했습니다.");
    },
  });

  async function onSubmit(value: inputType) {
    const { title, content, tag, imageFile } = value;

    setSubmitLoading(true);

    if (imageFile === null) return;

    const compressionImage = await imgCompression(imageFile[0]);

    if (!user) {
      router.refresh();
      return;
    }

    const fashionItemData = {
      user,
      title,
      content,
      tag,
      image: compressionImage,
    };
    try {
      createFashion(fashionItemData);
    } catch {
      setSubmitLoading(false);
    }
  }

  return { onSubmit, submitLoading };
}
