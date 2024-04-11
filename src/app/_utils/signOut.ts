import supabase from "./supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useSignOut() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });

  return { mutate };
}

async function signOut() {
  const { error } = await supabase.auth.signOut();
}
