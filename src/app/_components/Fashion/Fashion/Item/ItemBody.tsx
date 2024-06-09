export default function ItemBody({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`flex h-[5rem] flex-col items-center justify-center gap-1 sm:h-[6rem] ${className}`}
    >
      {children}
    </h3>
  );
}
