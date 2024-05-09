export default function RightWrapper({
  children,
  className = "flex items-center justify-center",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
