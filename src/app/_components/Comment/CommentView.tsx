import Comment from "./Comment/Comment";
import { convertToKST } from "@/app/_utils/convertToKST";
import { CommentType } from "@/app/_types/type";
import DeleteBtn from "../Modal/DeleteBtn";

export default function CommentView({
  user,
  content,
  created_at,
  sameUser,
  onDelete,
  commentLoading,
}: CommentType) {
  return (
    <Comment className=" border-b border-backgroundTwo p-3 text-xl">
      <Comment.Header>
        <Comment.Title>{user}</Comment.Title>
        <Comment.Title>{convertToKST(created_at, false)}</Comment.Title>
        <Comment.Title>
          {sameUser && (
            <DeleteBtn
              title="댓글"
              onDelete={onDelete}
              isLoading={commentLoading}
              color=""
              size="sm"
            />
          )}
        </Comment.Title>
      </Comment.Header>
      <Comment.Content className=" px-4 font-bold">{content}</Comment.Content>
    </Comment>
  );
}
