export default function ManageTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h3 className={`cursor-default text-4xl ${className}`}>{children}</h3>;
}
