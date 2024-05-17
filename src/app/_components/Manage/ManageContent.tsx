export default function ManageContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`flex-1 ${className}`}>{children}</p>;
}
