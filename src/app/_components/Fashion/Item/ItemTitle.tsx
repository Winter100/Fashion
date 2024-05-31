export default function ItemTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`flex w-full items-center justify-center overflow-hidden overflow-ellipsis whitespace-nowrap text-2xl ${className}`}
    >
      {children}
    </p>
  );
}
