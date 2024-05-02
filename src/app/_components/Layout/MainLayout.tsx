export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-0 mt-16 w-full bg-background p-4 sm:mx-28 xl:mx-48">
      {children}
    </main>
  );
}
