import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function EditBtn() {
  const { tag, id }: { tag: string; id: string } = useParams();

  return (
    <Link className=" text-2xl" href={`/edit/${tag}/${id}`}>
      수정
    </Link>
  );
}
