import Image from "next/image";

import { ListItemType } from "@/app/_types/type";
import { convertToKST } from "@/app/_utils/convertToKST";
import { convertToTag } from "@/app/_utils/convertToTag";
import Item from "../Fashion/Item/Item";

export default function SearchItem({
  title,
  image,
  user,
  tag,
  created_at,
}: ListItemType) {
  return (
    <Item>
      <Item.Image>
        <Image
          className="rounded-xl object-cover"
          src={image}
          alt={title}
          fill
          priority
        />
      </Item.Image>
      <Item.Body>
        <Item.Title>{title}</Item.Title>
        <Item.SubTitle>
          {convertToKST(created_at, false)} -{user}-
        </Item.SubTitle>
        <Item.SubTitle>{convertToTag(tag)}</Item.SubTitle>
      </Item.Body>
    </Item>
  );
}