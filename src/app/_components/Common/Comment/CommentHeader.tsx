export default function CommentHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex h-8 items-center gap-8 ${className}`}>{children}</div>
  );
}
