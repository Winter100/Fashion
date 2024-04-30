import LeftBar from "../Nav/LeftBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-auto flex h-full w-full max-w-screen-2xl items-center justify-center">
      <aside className="bg-backgroundOne h-full w-20 sm:w-40 lg:w-56">
        <LeftBar />
      </aside>
      <main className="bg-backgroundOne ml-4 h-[90%] w-full rounded-2xl">
        {children}
      </main>
    </div>
  );
}
