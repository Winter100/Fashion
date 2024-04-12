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
      queryClient.setQueryData(["auth"], user.user);
      router.replace("/");
    },
  });
  return { login, isPending };
}
