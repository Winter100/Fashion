import CommentWrite from "./CommentWrite";
import CommentList from "./CommentList";

export default function CommentEntry() {
  return (
    <div>
      <div className="m-auto mt-8 flex max-w-screen-xl flex-col px-16 py-4">
        <h2 className=" my-2 text-3xl">댓글</h2>
        <CommentWrite />
        <CommentList />
      </div>
    </div>
  );
}
