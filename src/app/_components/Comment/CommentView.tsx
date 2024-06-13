"use client";

import React, { useCallback, useState } from "react";
import { PiArrowElbowDownRightLight } from "react-icons/pi";

import Comment from "./Comment/Comment";
import { convertToKST } from "@/app/_utils/convertToKST";
import { CommentType } from "@/app/_types/type";
import DeleteBtn from "../Modal/DeleteBtn";
import CommentWrite from "./CommentWrite";

export default function CommentView({
  user,
  content,
  created_at,
  isReplyCommentBtn = false,
  signInUser,
  user_id,
  onDelete,
  commentLoading,
  children = [],
  tag,
  id,
}: CommentType) {
  const [replyComment, setReplycomment] = useState(() => false);

  const handleClose = useCallback(function handleClose() {
    setReplycomment(false);
  }, []);

  return (
    <>
      <Comment className=" px-3 text-xl">
        <Comment.Header>
          <Comment.Title className=" flex">
            {!isReplyCommentBtn && (
              <div className=" mr-1 flex h-4 items-center">
                <PiArrowElbowDownRightLight className=" text-xs" />
              </div>
            )}
            {user}
          </Comment.Title>
          <Comment.Title>{convertToKST(created_at, false)}</Comment.Title>

          {user_id === signInUser && (
            <Comment.Title>
              <DeleteBtn
                title="댓글"
                onDelete={() => onDelete(id, tag)}
                isLoading={commentLoading}
                size="sm"
              />
            </Comment.Title>
          )}

          {isReplyCommentBtn && signInUser && (
            <Comment.Title>
              <button onClick={() => setReplycomment((pre) => !pre)}>
                답글
              </button>
            </Comment.Title>
          )}
        </Comment.Header>
        <Comment.Content className="px-5">{content}</Comment.Content>
      </Comment>

      <div className=" mx-5 px-5">
        {children?.map((item) => (
          <div className="  my-1 bg-backgroundOne shadow-sm" key={item.id}>
            <CommentView
              {...item}
              tag={tag}
              signInUser={signInUser}
              onDelete={onDelete}
              commentLoading={false}
            />
          </div>
        ))}
        {replyComment && (
          <div>
            <Comment.Content>
              <CommentWrite
                parent_id={id}
                isView={replyComment}
                handleClose={handleClose}
              />
            </Comment.Content>
          </div>
        )}
      </div>
    </>
  );
}
