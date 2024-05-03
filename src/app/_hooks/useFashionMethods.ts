import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { useLoading } from "./useLoading";
import {
  getFashionList as fashionListApi,
  getFashionItem as fashionDetailApi,
  postFashionItem as postFashionItemApi,
  updateFashionItem as upDateFashionItemApi,
  getFashionEditItem as getFashionEditItemApi,
  deleteFashionItem as deleteFashionItemApi,
} from "../_utils/apiFashion";
import { useUser } from "./useAuth";

import { PostData, UpdateDataFn } from "../_types/type";

export function useFashionList(tag: string = "Today") {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page"));

  const { data, isLoading, isError } = useQuery({
    queryKey: [tag, page],
    queryFn: () => fashionListApi(tag, page),
  });

  return { data, isLoading };
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
      router.push(`/fashion${tag}?page=1`);
    },
    onError: () => {
      toast.error("패션 기록을 실패했습니다.");
    },
  });

  return { postFashion };
}

export function useDelete() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { tag, id }: { tag: string; id: string } = useParams();

  const { isLoading, setLoading } = useLoading();

  const { mutate: deleteFashion } = useMutation({
    mutationFn: () => deleteFashionItemApi({ id, tag }),
    onSuccess: ({ id, tag }) => {
      toast.success("삭제되었습니다!");
      queryClient.removeQueries({ queryKey: ["detail", tag, id] });
      router.replace(`/fashion${tag}?page=1`);
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
  const router = useRouter();

  const { mutate: updateFashion, isPending } = useMutation({
    mutationFn: ({ title, content, image }: UpdateDataFn) =>
      upDateFashionItemApi({ title, content, tag, image, id }),
    onSuccess: () => {
      toast.success("수정이 완료되었습니다.");
      router.back();
    },
    onError: (e) => {
      toast.error(e.message);
      toast.error("잠시 후 다시 시도해 주세요!");
      router.replace(`/fashion${tag}?page=1`);
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
  });

  return { id, data, isLoading, isError };
}
