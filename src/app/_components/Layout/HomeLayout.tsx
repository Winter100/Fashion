export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      {children}
    </div>
  );
}
