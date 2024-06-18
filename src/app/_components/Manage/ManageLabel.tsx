export default function ManageLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <label className={`${className}`}>{children}</label>;
}
