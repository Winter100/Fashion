import CommentHeader from "./CommentHeader";
import CommentContent from "./CommentContent";
import CommentTitle from "./CommentTitle";

export default function Comment({
  onSubmit,
  children,
  className,
}: {
  onSubmit?: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <form onSubmit={onSubmit} className={`cursor-default ${className}`}>
      {children}
    </form>
  );
}

Comment.Header = CommentHeader;
Comment.Content = CommentContent;
Comment.Title = CommentTitle;
