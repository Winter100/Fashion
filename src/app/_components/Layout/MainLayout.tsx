export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="layout-max-width m-auto h-full p-1">{children}</main>;
}
