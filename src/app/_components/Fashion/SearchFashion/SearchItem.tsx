import { memo } from "react";
import Image from "next/image";

import { ListItemType } from "@/app/_types/type";
import { convertToKST } from "@/app/_utils/convertToKST";
import { convertToTag } from "@/app/_utils/convertToTag";
import Item from "../Fashion/Item/Item";

const SearchItem = memo(function SearchItem({
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
        <Item.SubTitle>{title}</Item.SubTitle>
        <Item.SubTitle>{convertToTag(tag)}</Item.SubTitle>
        <Item.SubTitle>{user}</Item.SubTitle>
        <Item.SubTitle>{convertToKST(created_at, false)}</Item.SubTitle>
      </Item.Body>
    </Item>
  );
});
export default SearchItem;
