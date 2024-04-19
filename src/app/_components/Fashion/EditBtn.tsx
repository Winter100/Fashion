import Link from "next/link";
import React from "react";

export default function EditBtn({ itemId }: { itemId: string }) {
  return (
    <Link className=" text-2xl" href={`/edit/${itemId}`}>
      수정
    </Link>
  );
}
