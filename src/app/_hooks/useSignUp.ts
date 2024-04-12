import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp as signUpApi } from "../_utils/apiAuth";
import { useRouter } from "next/navigation";

export default function useSignUp() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: ({
      email,
      password,
      name,
    }: {
      email: string;
      password: string;
      name: string;
    }) => signUpApi({ email, password, name }),
    onSuccess: (user) => {
      queryClient.setQueryData(["auth"], user.user);
      router.replace("/");
    },
  });
  return { signUp, isPending };
}
