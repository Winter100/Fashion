import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { signOut as signOutLib } from "@/app/_lib/supabase/auth";
import { useQueryString } from "../useQueryString";
import { setFashionRoute } from "@/app/_lib/utils/setFashionRoute";
import { TAG_NAME } from "@/app/_constant/constant";

export default function useSignOut() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { page, validStart, validEnd } = useQueryString();

  const { mutate: signOut, isPending } = useMutation({
    mutationFn: signOutLib,
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
  return { signOut, isPending };
}
