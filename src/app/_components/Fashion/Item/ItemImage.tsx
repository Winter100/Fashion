export default function ItemImage({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative h-full w-full ${className}`}>{children}</div>
  );
}
