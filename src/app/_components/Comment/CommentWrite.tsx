"use client";

import { ChangeEvent, useState } from "react";
import { TextInput } from "flowbite-react";

import Rating from "../Rating/Rating";
import Comment from "./Comment/Comment";
import { usePostComment } from "@/app/_hooks/useFashionMethods";
import { useUser } from "@/app/_hooks/useAuth";

export default function CommentWrite() {
  const { postComment } = usePostComment();
  const [commentValue, setCommentValue] = useState("");
  const [rating, setRating] = useState(0);

  const { user } = useUser();

  function handleSubmit() {
    // commentValue 값이 없을때 에러 핸들링 필요.
    if (!user || commentValue.length === 0) return;

    const comment = {
      user,
      content: commentValue,
      rating,
    };
    postComment(comment, {
      onSuccess: () => {
        setCommentValue("");
        setRating(0);
      },
    });
  }

  function onChagneT(e: ChangeEvent<HTMLInputElement>) {
    setCommentValue(e.target.value);
  }

  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  return (
    <Comment className=" border-b border-backgroundTwo p-3 text-xl">
      {user?.user_metadata ? (
        <>
          <Comment.Header>
            <Comment.Title>{user?.user_metadata?.name || ""}</Comment.Title>
            <Comment.Title className=" cursor-pointer">
              <Rating rating={rating} length={5} onClick={handleRatingClick} />
            </Comment.Title>
          </Comment.Header>
          <Comment.Content className="flex flex-col gap-2  px-4">
            <TextInput
              style={{ fontSize: "0.75rem", lineHeight: "1rem" }}
              className="font-mono"
              onChange={onChagneT}
              value={commentValue}
            />
            <div className="flex justify-end gap-4 text-xl">
              <button onClick={() => setCommentValue("")}>취소</button>
              <button onClick={handleSubmit}>등록</button>
            </div>
          </Comment.Content>
        </>
      ) : (
        <div className="text-center">
          <p>댓글은 로그인 후 남길 수 있습니다.</p>
          <button>로그인</button>
        </div>
      )}
    </Comment>
  );
}
