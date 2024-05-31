import Image from "next/image";

import Item from "../Item/Item";
import { ListItemType } from "@/app/_types/type";
import { convertToKST } from "@/app/_utils/convertToKST";
import { convertToTag } from "@/app/_utils/convertToTag";

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
          quality={90}
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
