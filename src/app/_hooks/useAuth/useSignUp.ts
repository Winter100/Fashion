import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { signUpApi } from "@/app/_api/authApi";
import { removeUserDataForLocalSotarge } from "@/app/_utils/localstorage";

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
      removeUserDataForLocalSotarge();
      router.replace("/auth/signin");
    },
  });
  return { signUp, isPending };
}
