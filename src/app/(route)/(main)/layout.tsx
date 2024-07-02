import ToastProvider from "@/app/_provider/ToastProvider";
import TanstackProvider from "@/app/_provider/TanstackProvider";
import UserContextProvider from "@/app/_provider/UserContextProvider";

import DarkMode from "@/app/_provider/DarkModeProvider";
import TopGnb from "@/app/_layouts/TopGnb";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <TanstackProvider>
        <UserContextProvider>
          <DarkMode>
            <TopGnb />
            <main className="layout-max-width min-h-screen">
              <div className="mx-0 mt-16 w-full bg-background p-4 md:mt-36">
                {children}
              </div>
            </main>
          </DarkMode>
        </UserContextProvider>
      </TanstackProvider>
    </ToastProvider>
  );
}
