export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-auto h-dvh max-w-screen-lg  border-2 p-6">{children}</div>
  );
}
