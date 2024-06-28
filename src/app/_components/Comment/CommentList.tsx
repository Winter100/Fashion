"use client";

import { useParams } from "next/navigation";
import { Spinner } from "flowbite-react";

import CommentView from "./CommentView";

import { useUser } from "@/app/_hooks/useAuth";
import { useDeleteComment, useReadComments } from "@/app/_hooks/useFashion";
import { buildCommentsTree } from "@/app/_utils/buildCommentsTree";

export default function CommentList() {
  const { isLoading, data, isError, error } = useReadComments();
  const { deleteComment, isLoading: commentLoading } = useDeleteComment();
  const { tag } = useParams();
  const { user_id: signInUser } = useUser();

  function onDelete(id: string, tag: string) {
    deleteComment({ id, tag });
  }

  if (isLoading) return <Spinner className="m-auto mt-4 flex" />;

  if (data?.length === 0)
    return <p className="m-auto my-4">등록된 댓글이 없습니다</p>;

  if (isError)
    return (
      <>
        <p className="m-auto my-4 text-red-400">댓글을 가져오지 못했습니다.</p>
        <p className="m-auto text-red-400">{error?.message}</p>
      </>
    );

  const commentTree = buildCommentsTree(data);

  return (
    <ul>
      {commentTree?.map((item) => (
        <li className=" border-t border-backgroundTwo" key={item.id}>
          <CommentView
            {...item}
            tag={tag as string}
            isReplyCommentBtn={item.parent_id === null || false}
            signInUser={signInUser || ""}
            commentLoading={commentLoading}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}
