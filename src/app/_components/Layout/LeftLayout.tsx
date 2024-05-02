export default function LeftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="z-20 hidden h-full w-28 sm:fixed sm:block  xl:w-48">
      {children}
    </div>
  );
}
