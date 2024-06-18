export default function ManageContentArea({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <li className={`${className}`}>{children}</li>;
}
