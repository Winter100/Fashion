"use client";

import { TextInput } from "flowbite-react";

import Comment from "./Comment/Comment";

export default function CommentWrite() {
  return (
    <Comment className=" border-b border-backgroundTwo p-3 text-xl">
      <Comment.Header>
        <Comment.Title>김아무개</Comment.Title>
        <Comment.Title>Rating...</Comment.Title>
      </Comment.Header>
      <Comment.Content className="flex flex-col gap-2  px-4">
        <TextInput
          style={{ fontSize: "0.75rem", lineHeight: "1rem" }}
          className="font-mono"
        />
        <div className="flex justify-end gap-4 text-xl">
          <button>취소</button>
          <button>등록</button>
        </div>
      </Comment.Content>
    </Comment>
  );
}
