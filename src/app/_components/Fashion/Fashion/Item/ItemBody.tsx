export default function ItemBody({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex h-32 flex-col items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}
