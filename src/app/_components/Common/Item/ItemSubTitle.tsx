export default function ItemSubTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex w-full items-center justify-center text-xl ${className}`}
    >
      <p className="h-full w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-center">
        {children}
      </p>
    </div>
  );
}
