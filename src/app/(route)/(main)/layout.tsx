import ToastProvider from "@/app/_provider/ToastProvider";
import TanstackProvider from "@/app/_provider/TanstackProvider";
import UserContextProvider from "@/app/_provider/UserContextProvider";

import DarkMode from "@/app/_provider/DarkModeProvider";
import TopGnb from "@/app/_layouts/TopGnb";
import LeftGnb from "@/app/_layouts/LeftGnb";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <TanstackProvider>
        <UserContextProvider>
          <DarkMode>
            <TopGnb />
            <div className="flex w-full bg-background">
              <LeftGnb />
              <main className="layout-max-width min-h-screen p-1">
                <div className="mx-0 mt-16 w-full p-1 md:mt-20 md:p-4">
                  {children}
                </div>
              </main>
            </div>
          </DarkMode>
        </UserContextProvider>
      </TanstackProvider>
    </ToastProvider>
  );
}
