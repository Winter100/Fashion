import Image from "next/image";

import Item from "../Item/Item";
import { ListItemType } from "@/app/_types/type";
import { convertToKST } from "@/app/_utils/convertToKST";

export default function FashionItem({
  title,
  image,
  user,
  created_at,
  tag,
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
        <Item.SubTitle>{user}</Item.SubTitle>
        <Item.SubTitle>{convertToKST(created_at, false)}</Item.SubTitle>
      </Item.Body>
    </Item>
  );
}
