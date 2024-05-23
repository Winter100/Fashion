import Comment from "./Comment/Comment";

export default function CommentView() {
  return (
    <Comment className=" border-b border-backgroundTwo p-3 text-xl">
      <Comment.Header>
        <Comment.Title>홍길동</Comment.Title>
        <Comment.Title>??시간 전</Comment.Title>
        <Comment.Title>별점</Comment.Title>
      </Comment.Header>
      <Comment.Content>꽤 잘입었네요 좋은거 같아요.</Comment.Content>
    </Comment>
  );
}
