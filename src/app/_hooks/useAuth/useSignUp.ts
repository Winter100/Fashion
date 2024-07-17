import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { signUp as signUpLib } from "@/app/_lib/supabase/auth";
import { removeUserDataForLocalSotarge } from "@/app/_lib/utils/localstorage";
import { signUpType } from "@/app/_types/type";

export default function useSignUp() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm<signUpType>();

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: ({
      email,
      password,
      name,
    }: {
      email: string;
      password: string;
      name: string;
    }) => signUpLib({ email, password, name }),
    onSuccess: (user) => {
      toast.success("회원가입이 완료되었습니다.");
      removeUserDataForLocalSotarge();
      router.replace("/auth/signin");
    },
  });

  async function onSubmit(value: signUpType) {
    const { email, name, password } = value;
    if (!name) return;
    signUp(
      { email, name, password },
      {
        onError: (e) => {
          setError("root", { message: e.message }, { shouldFocus: true });
        },
      },
    );
  }

  function routeToSignIn(e: FormEvent) {
    e.preventDefault();
    router.push("/auth/signin");
  }

  return {
    isPending,
    register,
    handleSubmit,
    getValues,
    setError,
    routeToSignIn,
    errors,
    onSubmit,
  };
}
