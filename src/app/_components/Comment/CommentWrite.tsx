"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "flowbite-react";
import Link from "next/link";

import Rating from "../Rating/Rating";
import Comment from "./Comment/Comment";
import { usePostComment } from "@/app/_hooks/useFashionMethods";
import { useUser } from "@/app/_hooks/useAuth";

export default function CommentWrite() {
  const { postComment } = usePostComment();
  const [rating, setRating] = useState(1);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      comment: "",
    },
  });

  const { user } = useUser();

  function onSubmit(value: { comment: string }) {
    if (!user) return;

    const { comment } = value;
    const data = {
      user,
      content: comment,
      rating,
    };
    postComment(data, {
      onSuccess: () => {
        setRating(1);
        reset({ comment: "" });
      },
    });
  }

  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  return (
    <Comment
      onSubmit={handleSubmit(onSubmit)}
      className=" border-b border-backgroundTwo p-3 text-xl"
    >
      {user?.user_metadata ? (
        <>
          <Comment.Header>
            <Comment.Title>{user?.user_metadata?.name || ""}</Comment.Title>
            <Comment.Title className=" cursor-pointer">
              <Rating rating={rating} length={5} onClick={handleRatingClick} />
            </Comment.Title>
            <Comment.Title className="text-red-500">
              {errors.comment && errors.comment?.message}
            </Comment.Title>
          </Comment.Header>
          <Comment.Content className="flex flex-col gap-2  px-4">
            <TextInput
              {...register("comment", {
                required: "내용과 별점을 확인해주세요",
              })}
              style={{ fontSize: "0.75rem", lineHeight: "1rem" }}
              className="font-mono"
            />
            <div className="flex justify-end gap-4 text-xl">
              <button type="reset">취소</button>
              <button type="submit">등록</button>
            </div>
          </Comment.Content>
        </>
      ) : (
        <div className="text-center">
          <p>댓글은 로그인 후 남길 수 있습니다.</p>
          <Link href="/auth/signin">로그인</Link>
        </div>
      )}
    </Comment>
  );
}
