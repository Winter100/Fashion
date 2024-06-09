import ToastProvider from "@/app/_provider/ToastProvider";
import TanstackProvider from "@/app/_provider/TanstackProvider";
import UserContextProvider from "@/app/_provider/UserContextProvider";

import TopGnb from "@/app/_layouts/TopGnb";
import LeftGnb from "@/app/_layouts/LeftGnb";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <TanstackProvider>
        <UserContextProvider>
          <TopGnb />
          <div className=" flex min-h-screen w-full">
            <nav className="z-20 hidden h-full w-28 md:fixed md:block xl:w-40">
              <LeftGnb />
            </nav>
            <main className="mx-0 mt-16 w-full bg-background p-2 md:ml-28 xl:ml-40">
              {children}
            </main>
          </div>
        </UserContextProvider>
      </TanstackProvider>
    </ToastProvider>
  );
}
