import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { signOutApi } from "@/app/_api/authApi";
import { TAG_NAME } from "@/app/_constant/constant";
import { setFashionRoute } from "@/app/_utils/setFashionRoute";
import { useQueryString } from "../useQueryString";

export default function useSignOut() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { page, validStart, validEnd } = useQueryString();

  const { mutate: signout, isPending } = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      toast.success("로그아웃 되었습니다.");
      router.replace(
        setFashionRoute(
          TAG_NAME.fashion,
          TAG_NAME.today,
          page,
          validStart,
          validEnd,
        ),
      );
    },
  });
  return { signout, isPending };
}
