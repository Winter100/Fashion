export default function ManageLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <label className={`w-40 ${className}`}>{children}</label>;
}
