export default function RightLayout({
  children,
  className = "right-0 z-20 hidden h-full w-28 sm:fixed sm:block sm:w-44 md:w-48 xl:w-60",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
