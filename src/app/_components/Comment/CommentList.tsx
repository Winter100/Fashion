"use client";

import { useParams } from "next/navigation";
import { Spinner } from "flowbite-react";

import CommentView from "./CommentView";

import { useUser } from "@/app/_hooks/useAuth";
import { useDeleteComment, useReadComments } from "@/app/_hooks/useFashion";

export default function CommentList() {
  const { isLoading, data } = useReadComments();
  const { deleteComment, isLoading: commentLoading } = useDeleteComment();
  const { tag } = useParams();
  const { user_id } = useUser();

  if (isLoading) return <Spinner className="m-auto mt-4 flex" />;
  if (data?.length === 0)
    return <p className="m-auto my-4">등록된 댓글이 없습니다</p>;

  function onDelete(id: string, tag: string) {
    deleteComment({ id, tag });
  }

  return (
    <>
      {data?.map((item) => (
        <li key={item.id}>
          <CommentView
            {...item}
            sameUser={user_id === item.user_id}
            commentLoading={commentLoading}
            onDelete={() => onDelete(item.id, tag as string)}
          />
        </li>
      ))}
    </>
  );
}
