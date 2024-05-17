export default function ManageContentWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul
      className={`flex flex-col rounded-2xl bg-backgroundOne p-4 ${className}`}
    >
      {children}
    </ul>
  );
}
