import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";

import useUser from "../useAuth/useUser";
import { readFashionEditDataApi } from "@/app/_api/fashionApi";

export default function useReadFashionEditData() {
  const { tag, id } = useParams<{ tag: string; id: string }>();
  const router = useRouter();
  const { user } = useUser();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [`detail`, tag, id],
    queryFn: () => readFashionEditDataApi(id, user?.id, tag),
    staleTime: 1000,
  });

  useEffect(() => {
    if (isError && error) {
      toast.error(error?.message);
      router.replace("/mypage/list");
    }
  }, [isError, router, error]);

  const inititem = {
    title: data?.title ?? "",
    content: data?.content ?? "",
    tag: data?.tag ?? "",
    image: data?.image ?? "",
  };

  return { isLoading, inititem };
}
