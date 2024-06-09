import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { PostData } from "@/app/_types/type";
import { setFashionRoute } from "@/app/_utils/setFashionRoute";
import { TAG_NAME } from "@/app/_constant/constant";
import { createFashionApi } from "@/app/_api/fashionApi";

export default function useCreate() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: createFashion } = useMutation({
    mutationFn: ({ user, title, content, tag, image }: PostData) =>
      createFashionApi({ user, title, content, tag, image }),
    onSuccess: (tag) => {
      toast.success("패션을 기록했습니다!");
      queryClient.invalidateQueries();
      router.push(setFashionRoute(TAG_NAME.fashion, tag));
    },
    onError: () => {
      toast.error("패션 기록을 실패했습니다.");
    },
  });

  return { createFashion };
}
