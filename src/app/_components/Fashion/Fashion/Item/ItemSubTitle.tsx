export default function ItemSubTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-center text-xl ${className}`}
    >
      {children}
    </p>
  );
}
