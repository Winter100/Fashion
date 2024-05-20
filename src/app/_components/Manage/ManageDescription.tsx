export default function ManageDescription({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-describedby="description"
      className={`mx-2 cursor-default  text-xl ${className}`}
    >
      {children}
    </div>
  );
}
