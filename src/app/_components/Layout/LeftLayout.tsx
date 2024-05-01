export default function LeftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hidden h-full md:fixed md:block md:w-48">{children}</div>
  );
}
