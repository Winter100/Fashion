export default function ManageContentArea({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <li className={`flex ${className}`}>{children}</li>;
}
