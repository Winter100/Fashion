import Comment from "./Comment/Comment";
import RatingView from "../Rating/RatingView";
import { convertToKST } from "@/app/_utils/convertToKST";
import { CommentType } from "@/app/_types/type";

export default function CommentView({
  user,
  content,
  created_at,
  rating,
}: CommentType) {
  return (
    <Comment className=" border-b border-backgroundTwo p-3 text-xl">
      <Comment.Header>
        <Comment.Title>{user}</Comment.Title>
        <Comment.Title>{convertToKST(created_at, false)}</Comment.Title>
        <Comment.Title>
          <RatingView rating={rating} />
        </Comment.Title>
      </Comment.Header>
      <Comment.Content className=" px-4 font-bold">{content}</Comment.Content>
    </Comment>
  );
}
