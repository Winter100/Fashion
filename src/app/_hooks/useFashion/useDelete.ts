import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteFashion as deleteFashionLib } from "@/app/_lib/supabase/fashion";
import { useLoading } from "../useLoading";
import { DeleteListType } from "@/app/_types/type";

export default function useDelete() {
  const queryClient = useQueryClient();
  const { isLoading, setLoading } = useLoading();
  const [checkedIds, setCheckedIds] = useState<DeleteListType[]>([]);

  const handleCheck = useCallback((id: string, tag: string) => {
    setCheckedIds((prevCheckedIds) => {
      const isAlreadyChecked = prevCheckedIds.some((item) => item.id === id);
      if (isAlreadyChecked) {
        return prevCheckedIds.filter((item) => item.id !== id);
      } else {
        return [...prevCheckedIds, { id, tag }];
      }
    });
  }, []);

  function handleDelete() {
    setLoading(true);
    deleteFashion(checkedIds, {
      onSuccess: () => {
        setCheckedIds([]);
        setLoading(false);
      },
    });
  }

  const { mutate: deleteFashion } = useMutation({
    mutationFn: (items: DeleteListType[]) => deleteFashionLib(items),
    onSuccess: () => {
      toast.success("기록이 삭제 됐습니다!");
      queryClient.invalidateQueries();
    },
    onError: () => {
      toast.error("잠시 후 다시 시도해 주세요!");
      setLoading(false);
    },
  });

  const disabled = checkedIds.length === 0;

  return {
    handleCheck,
    isLoading,
    handleDelete,
    disabled,
  };
}
