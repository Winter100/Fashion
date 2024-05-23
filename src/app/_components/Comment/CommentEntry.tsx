import CommentWrite from "./CommentWrite";
import CommentView from "./CommentView";

export default function CommentList() {
  // useComment() 로 댓글 받아 오기?
  return (
    <div className="m-auto mt-8 flex max-w-screen-xl flex-col p-4 px-16">
      <h2 className=" my-2 text-3xl">댓글 X개</h2>
      <CommentWrite />
      <CommentView />
      <CommentView />
      <CommentView />
      <CommentView />
      <CommentView />
      <CommentView />
      <CommentView />
      <CommentView />
      <CommentView />
      <CommentView />
      <CommentView />
    </div>
  );
}
