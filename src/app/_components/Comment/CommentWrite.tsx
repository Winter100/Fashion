"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { TextInput } from "flowbite-react";

import Comment from "./Comment/Comment";

import { useUser } from "@/app/_hooks/useAuth";
import { useCreateComment } from "@/app/_hooks/useFashion";

export default function CommentWrite() {
  const { createComment } = useCreateComment();
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
    };
    createComment(data, {
      onSuccess: () => {
        reset({ comment: "" });
      },
    });
  }

  return (
    <Comment
      onSubmit={handleSubmit(onSubmit)}
      className=" border-b border-backgroundTwo p-3 text-xl"
    >
      {user?.user_metadata ? (
        <>
          <Comment.Header>
            <Comment.Title>{user?.user_metadata?.name || ""}</Comment.Title>
            <Comment.Title className="text-red-500">
              {errors.comment && errors.comment?.message}
            </Comment.Title>
          </Comment.Header>
          <Comment.Content className="flex flex-col gap-2  px-4">
            <TextInput
              {...register("comment", {
                required: "내용을 입력해주세요",
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
