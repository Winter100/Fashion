import Image from "next/image";
import { memo } from "react";

import { ListItemType } from "@/app/_types/type";
import { convertToKST } from "@/app/_utils/convertToKST";
import Item from "./Item/Item";

const FashionItem = memo(function FashionItem({
  title,
  image,
  user,
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
        <Item.SubTitle>{title}</Item.SubTitle>
        <Item.SubTitle>{user}</Item.SubTitle>
        <Item.SubTitle>{convertToKST(created_at, false)}</Item.SubTitle>
      </Item.Body>
    </Item>
  );
});

export default FashionItem;
