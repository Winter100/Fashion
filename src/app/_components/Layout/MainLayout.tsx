export default function MainLayout({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <main className={className}>{children}</main>;
}
