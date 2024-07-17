import { memo } from "react";

import Item from "@/app/_components/Common/Item/Item";
import FashionImage from "@/app/_components/Common/FashionImage";
import { ListItemType } from "@/app/_types/type";
import { convertToKST } from "@/app/_lib/utils/convertToKST";

const FashionItem = memo(function FashionItem({
  title,
  image,
  user,
  created_at,
}: ListItemType) {
  return (
    <Item>
      <Item.Image>
        <FashionImage src={image} alt={title} />
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
