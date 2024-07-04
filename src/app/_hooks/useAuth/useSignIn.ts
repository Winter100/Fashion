import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { signInApi } from "@/app/_api/authApi";
import { AUTH_KEY, TAG_NAME } from "@/app/_constant/constant";
import { setFashionRoute } from "@/app/_utils/setFashionRoute";
import { useQueryString } from "../useQueryString";

export default function useSignIn() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { page, validStart, validEnd } = useQueryString();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signInApi({ email, password }),
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

  return { login, isPending };
}
