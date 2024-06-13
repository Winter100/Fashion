"use client";
import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";

import { Checkbox } from "flowbite-react";
import { CiEdit } from "react-icons/ci";

import { convertToKST } from "@/app/_utils/convertToKST";
import { convertToTag } from "@/app/_utils/convertToTag";
import { MyItemType } from "@/app/_types/type";

const MyFashionItem = memo(function MyFashionItem({
  item,
  handleCheck,
}: MyItemType) {
  const { tag, id, created_at, image, title } = item;

  return (
    <>
      <p className=" relative h-full w-full ">
        <Link href={`/detail/${tag}/${id}`}>
          <Image src={image} alt={title} fill className="object-contain" />
        </Link>
      </p>
      <p>{title}</p>
      <p>{convertToKST(created_at, false)}</p>
      <p>{convertToTag(tag)}</p>
      <p>
        <Link href={`/edit/${tag}/${id}`}>
          <CiEdit />
        </Link>
      </p>
      <p>
        <Checkbox
          id={id}
          onChange={() => handleCheck(id, tag)}
          aria-label={`Select ${title}`}
        />
      </p>
    </>
  );
});

export default MyFashionItem;
