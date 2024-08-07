"use client";

import React, { memo } from "react";
import Link from "next/link";
import { Checkbox } from "flowbite-react";
import { CiEdit } from "react-icons/ci";

import { convertToKST } from "@/app/_lib/utils/convertToKST";
import { convertToTag } from "@/app/_lib/utils/convertToTag";
import { MyItemType } from "@/app/_types/type";
import FashionImage from "../../Common/FashionImage";

const MyFashionItem = memo(function MyFashionItem({
  item,
  handleCheck,
}: MyItemType) {
  const { tag, id, created_at, image, title } = item;

  return (
    <>
      <div className=" h-full w-full ">
        <div className="relative flex h-full items-center justify-center">
          <Link href={`/detail/${tag}/${id}`}>
            <FashionImage className="object-contain" src={image} alt={title} />
          </Link>
        </div>
      </div>
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
