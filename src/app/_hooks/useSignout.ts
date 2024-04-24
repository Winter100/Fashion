import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { signOut as signoutApi } from "../_utils/apiAuth";

export default function useSignout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: signout, isPending } = useMutation({
    mutationFn: signoutApi,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["auth"], exact: true });
      toast.success("로그아웃 되었습니다.");
      router.replace("/fashion?page=1");
    },
  });
  return { signout, isPending };
}
