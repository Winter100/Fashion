import CommentHeader from "./CommentHeader";
import CommentContent from "./CommentContent";
import CommentTitle from "./CommentTitle";

export default function Comment({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`cursor-default ${className}`}>{children}</div>;
}

Comment.Header = CommentHeader;
Comment.Content = CommentContent;
Comment.Title = CommentTitle;
