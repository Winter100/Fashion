export default function ItemTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-center text-2xl ${className}`}
    >
      {children}
    </p>
  );
}
