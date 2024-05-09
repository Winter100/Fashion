export default function MainLayout({
  children,
  className = "mx-0 mt-16 w-full bg-background p-4 sm:ml-28 sm:mr-44 md:mr-48 xl:ml-40 xl:mr-60",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <main className={className}>{children}</main>;
}
