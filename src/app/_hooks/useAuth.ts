import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import {
  getAuth,
  signIn as signinApi,
  signOut as signoutApi,
  signUp as signUpApi,
} from "../_utils/apiAuth";
import { removeUserDataForLocalSotarge } from "../_utils/localstorage";
import { setFashionRoute } from "../_utils/setFashionRoute";
import { TAG_NAME } from "../_utils/constant";

const AUTH_KEY = "auth";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: [AUTH_KEY],
    queryFn: getAuth,
    staleTime: Infinity,
  });

  const isAuthenticated = user?.role === "authenticated";
  const user_id = user?.id;

  return { user, isLoading, isAuthenticated, user_id };
}

export function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signinApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData([AUTH_KEY], user?.user);
      toast.success(`반갑습니다! ${user.user.user_metadata?.name || " "} 님`);
      router.replace(setFashionRoute(TAG_NAME.fashion, TAG_NAME.today));
    },
  });
  return { login, isPending };
}

export function useSignout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: signout, isPending } = useMutation({
    mutationFn: signoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      toast.success("로그아웃 되었습니다.");
      router.replace(setFashionRoute(TAG_NAME.fashion, TAG_NAME.today));
    },
  });
  return { signout, isPending };
}

export function useSignUp() {
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
