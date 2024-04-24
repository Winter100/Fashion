import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { signIn as loginApi } from "../_utils/apiAuth";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["auth"], user?.user);
      toast.success(`반갑습니다! ${user.user.user_metadata?.name || " "} 님`);
      router.refresh();
    },
    onError: () => {
      toast.error("잠시 후 다시 시도해 주세요!");
    },
  });
  return { login, isPending };
}
