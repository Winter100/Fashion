import { memo } from "react";

import Item from "@/app/_components/Common/Item/Item";
import FashionImage from "@/app/_components/Common/FashionImage";
import { convertToTag } from "@/app/_lib/utils/convertToTag";
import { convertToKST } from "@/app/_lib/utils/convertToKST";
import { ListItemType } from "@/app/_types/type";

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
        <FashionImage src={image} alt={title} />
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
