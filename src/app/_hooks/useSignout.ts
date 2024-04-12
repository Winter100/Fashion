import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut as signoutApi } from "../_utils/apiAuth";
import { useRouter } from "next/navigation";

export default function useSignout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: signout, isPending } = useMutation({
    mutationFn: signoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      router.replace("/");
    },
  });
  return { signout, isPending };
}
