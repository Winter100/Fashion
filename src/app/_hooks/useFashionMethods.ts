import { useParams, useRouter } from "next/navigation";
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
  getFashionItemComments,
  postFashionItemComment,
  deleteFashionComment,
  searchFashion,
} from "../_utils/apiFashion";
import { useUser } from "./useAuth";

import { PostData, UpdateDataFn, DeleteListType } from "../_types/type";
import { setFashionRoute } from "../_utils/setFashionRoute";
import { TAG_NAME } from "../_utils/constant";
import { useQueryString } from "./useQueryString";
import { User } from "@supabase/supabase-js";

export function useFashionList() {
  const params = useParams();
  const { page, validStart, validEnd } = useQueryString();

  const tag = params?.tag as string;

  const { data, isLoading, isError } = useQuery({
    queryKey: [tag, page, validStart, validEnd],
    queryFn: () => fashionListApi(tag, page, validStart, validEnd),
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
      staleTime: Infinity,
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
    queryFn: () => fashionDetailApi(id, tag),
  });

  return { data, isLoading };
}

export function usePost() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: postFashion } = useMutation({
    mutationFn: ({ user, title, content, tag, image }: PostData) =>
      postFashionItemApi({ user, title, content, tag, image }),
    onSuccess: (tag) => {
      toast.success("패션을 기록했습니다!");
      queryClient.invalidateQueries();
      router.push(setFashionRoute(TAG_NAME.fashion, tag));
    },
    onError: () => {
      toast.error("패션 기록을 실패했습니다.");
    },
  });

  return { postFashion };
}

export function useDelete() {
  const queryClient = useQueryClient();
  const { isLoading, setLoading } = useLoading();

  const { mutate: deleteFashion } = useMutation({
    mutationFn: (items: DeleteListType[]) => deleteFashionItemApi(items),
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

export function useUpdate() {
  const { tag, id }: { tag: string; id: string } = useParams();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: updateFashion, isPending } = useMutation({
    mutationFn: ({ title, content, image }: UpdateDataFn) =>
      upDateFashionItemApi({ title, content, tag, image, id }),
    onSuccess: () => {
      toast.success("수정이 완료되었습니다.");
      queryClient.invalidateQueries();
      router.back();
    },
    onError: (e) => {
      toast.error("잠시 후 다시 시도해 주세요!");
      router.replace(setFashionRoute(TAG_NAME.fashion, tag));
    },
  });

  return { updateFashion, isPending };
}

export function useEditData() {
  const { tag, id }: { tag: string; id: string } = useParams();
  const { user } = useUser();

  const { data, isLoading, isError } = useQuery({
    queryKey: [`detail`, tag, id],
    queryFn: () => getFashionEditItemApi(id, user?.id, tag),
    staleTime: 1 * 1000,
  });

  return { id, data, isLoading, isError };
}
export function useComments() {
  const { tag, id }: { tag: string; id: string } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: [`comments`, tag, id],
    queryFn: () => getFashionItemComments(id, tag),
    staleTime: 3 * 1000,
  });

  return { data, isLoading };
}

export function usePostComment() {
  const queryClient = useQueryClient();
  const { id: fashionId, tag }: { id: string; tag: string } = useParams();

  const { mutate: postComment } = useMutation({
    mutationFn: ({
      content,
      rating,
      user,
    }: {
      user: User;
      content: string;
      rating: number;
    }) => postFashionItemComment({ user, tag, content, fashionId, rating }),
    onSuccess: () => {
      toast.success("댓글을 기록했습니다!");
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
    onError: (error) => {
      // console.log("error", error);
      toast.error("댓글 기록을 실패했습니다.");
    },
  });

  return { postComment };
}

export function useDeleteComment() {
  const queryClient = useQueryClient();
  const { isLoading, setLoading } = useLoading();

  const { mutate: deleteComment } = useMutation({
    mutationFn: ({ id, tag }: { id: string; tag: string }) =>
      deleteFashionComment(id, tag),
    onSuccess: () => {
      toast.success("댓글이 삭제 됐습니다!");
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
    onError: () => {
      toast.error("잠시 후 다시 시도해 주세요!");
      setLoading(false);
    },
  });

  return { deleteComment, setLoading, isLoading };
}

export function useSearchFashion<T>(searchValue: string) {
  const tags = [TAG_NAME.today, TAG_NAME.tomorrow, TAG_NAME.this];

  const { data, pending } = useQueries({
    queries: tags.map((tag) => ({
      queryKey: ["search", tag, searchValue],
      queryFn: () => searchFashion(tag, searchValue),
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
