import { mergeDateAndpadZero } from "@/app/_utils/dateFn";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import {
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-toastify";

import { useLoading } from "./useLoading";
import {
  getFashionList as fashionListApi,
  getFashionItem as fashionDetailApi,
  postFashionItem as postFashionItemApi,
  updateFashionItem as upDateFashionItemApi,
  getFashionEditItem as getFashionEditItemApi,
  deleteFashionItem as deleteFashionItemApi,
  getMyFashionList as myFashionListApi,
} from "../_utils/apiFashion";
import { useUser } from "./useAuth";

import { PostData, UpdateDataFn, DeleteType } from "../_types/type";
import { setFashionRoute } from "../_utils/setFashionRoute";
import { TAG_NAME } from "../_utils/constant";
import { useState } from "react";

export function useFashionList() {
  const params = useParams();
  const searchParams = useSearchParams();

  const tag = params.tag as string;
  const page = Number(searchParams.get("page"));
  const date = searchParams.get("date") ?? mergeDateAndpadZero();

  const { data, isLoading, isError } = useQuery({
    queryKey: [tag, page, date],
    queryFn: () => fashionListApi(tag, page, date),
  });

  return { data, isLoading };
}

export function useMyFashionList<T>() {
  const { user } = useUser();
  const name = user?.user_metadata.name;

  const tags = [TAG_NAME.today, TAG_NAME.tomorrow, TAG_NAME.this];

  const { data, pending } = useQueries({
    queries: tags.map((tag) => ({
      queryKey: [tag, name],
      queryFn: () => myFashionListApi(tag, name),
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });

  const flattenedArray: T = data.reduce<any>(
    (acc, curr) => acc.concat(curr),
    [],
  );

  return { flattenedArray, pending };
}

export function useDetail() {
  const { tag, id }: { tag: string; id: string } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: [`detail`, tag, id],
    queryFn: () => fashionDetailApi(id as string, tag),
  });

  return { data, isLoading };
}

export function usePost() {
  const router = useRouter();
  const { mutate: postFashion } = useMutation({
    mutationFn: ({ user, title, content, tag, image }: PostData) =>
      postFashionItemApi({ user, title, content, tag, image }),
    onSuccess: (tag) => {
      toast.success("패션을 기록했습니다!");
      router.push(
        setFashionRoute(TAG_NAME.fashion, tag, 1, mergeDateAndpadZero()),
      );
    },
    onError: () => {
      toast.error("패션 기록을 실패했습니다.");
    },
  });

  return { postFashion };
}

export function useDelete(setOpenModal: any) {
  const queryClient = useQueryClient();
  const { isLoading, setLoading } = useLoading();
  const router = useRouter();

  const { mutate: deleteFashion } = useMutation({
    mutationFn: (items: DeleteType[]) => deleteFashionItemApi(items),
    onSuccess: () => {
      toast.success("기록이 삭제 됐습니다!");
      queryClient.invalidateQueries();
      router.refresh();
      setOpenModal(false);
      setLoading(false);
    },
    onError: () => {
      toast.error("잠시 후 다시 시도해 주세요!");
      setLoading(false);
    },
  });

  return { deleteFashion, setLoading, isLoading };
}

export function useUpdate() {
  const { tag, id }: { tag: string; id: string } = useParams();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: updateFashion, isPending } = useMutation({
    mutationFn: ({ title, content, image }: UpdateDataFn) =>
      upDateFashionItemApi({ title, content, tag, image, id }),
    onSuccess: () => {
      toast.success("수정이 완료되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["detail", tag, id] });
      router.back();
    },
    onError: (e) => {
      toast.error(e.message);
      toast.error("잠시 후 다시 시도해 주세요!");
      router.replace(
        setFashionRoute(TAG_NAME.fashion, tag, 1, mergeDateAndpadZero()),
      );
    },
  });

  return { updateFashion, isPending };
}

export function useEditData() {
  const { tag, id }: { tag: string; id: string } = useParams();
  const { user } = useUser();

  const { data, isLoading, isError } = useQuery({
    queryKey: [`detail`, tag, id],
    queryFn: () => getFashionEditItemApi(id as string, user?.id, tag),
    staleTime: 2 * 1000,
  });

  return { id, data, isLoading, isError };
}
