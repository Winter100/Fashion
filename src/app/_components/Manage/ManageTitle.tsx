export default function ManageTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={`cursor-default text-4xl ${className}`}>{children}</h2>;
}
