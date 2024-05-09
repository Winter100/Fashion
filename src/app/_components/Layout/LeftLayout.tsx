export default function LeftLayout({
  children,
  className = "z-20 hidden h-full w-28 sm:fixed sm:block xl:w-40",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
