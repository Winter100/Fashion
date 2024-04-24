import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

import { signUp as signUpApi } from "../_utils/apiAuth";

export default function useSignUp() {
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
      toast.success("회원가입이 완료되었습니다.");
      toast.success("로그인을 해주세요!");
      router.replace("/auth/signin");
    },
  });
  return { signUp, isPending };
}
