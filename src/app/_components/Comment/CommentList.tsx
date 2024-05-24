"use client";

import { Spinner } from "flowbite-react";
import CommentView from "./CommentView";
import { useComments } from "@/app/_hooks/useFashionMethods";

export default function CommentList() {
  const { isLoading, data } = useComments();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {data?.map((item) => (
        <li key={item.id}>
          <CommentView {...item} />
        </li>
      ))}
    </>
  );
}
