export default function ManageContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`flex-1 ${className}`}>{children}</div>;
}
