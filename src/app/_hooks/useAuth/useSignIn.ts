import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { signIn as signInLib } from "@/app/_lib/supabase/auth";
import { useUserContextData } from "@/app/_provider/UserContextProvider";
import { useQueryString } from "../useQueryString";
import { AUTH_KEY, TAG_NAME } from "@/app/_constant/constant";
import { setFashionRoute } from "@/app/_lib/utils/setFashionRoute";
import { signInType } from "@/app/_types/type";

const DEFAULT_VALUES = {
  email: "test@test.com",
  password: "test1234",
};

export default function useSignIn() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { page, validStart, validEnd } = useQueryString();
  const { setLoginData } = useUserContextData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<signInType>({
    defaultValues: DEFAULT_VALUES,
  });

  const { mutate: signIn, isPending } = useMutation({
    mutationFn: ({ email, password }: signInType) =>
      signInLib({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData([AUTH_KEY], user?.user);
      toast.success(`반갑습니다! ${user.user.user_metadata?.name || " "} 님`);
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

  function onSubmit(value: signInType) {
    signIn(value, {
      onError: (e) => {
        setError("root", { message: e.message });
      },
      onSuccess: (e) => {
        setLoginData(e?.user);
      },
    });
  }

  function routeToSignUp(e: FormEvent) {
    e.preventDefault();
    router.push("/auth/signup");
  }

  return {
    isPending,
    routeToSignUp,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}
