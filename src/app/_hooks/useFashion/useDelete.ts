import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { useLoading } from "../useLoading";
import { deleteFashionApi } from "@/app/_api/fashionApi";
import { DeleteListType } from "@/app/_types/type";

export default function useDelete() {
  const queryClient = useQueryClient();
  const { isLoading, setLoading } = useLoading();

  const { mutate: deleteFashion } = useMutation({
    mutationFn: (items: DeleteListType[]) => deleteFashionApi(items),
    onSuccess: () => {
      toast.success("기록이 삭제 됐습니다!");
      queryClient.invalidateQueries();
    },
    onError: () => {
      toast.error("잠시 후 다시 시도해 주세요!");
      setLoading(false);
    },
  });

  return { deleteFashion, setLoading, isLoading };
}
