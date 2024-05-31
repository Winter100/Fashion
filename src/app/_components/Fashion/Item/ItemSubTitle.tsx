export default function ItemSubTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`flex w-full items-center justify-center overflow-hidden overflow-ellipsis whitespace-nowrap text-xl ${className}`}
    >
      {children}
    </p>
  );
}
