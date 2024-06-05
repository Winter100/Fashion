import ToastProvider from "@/app//_components/Provider/ToastProvider";
import TanstackProvider from "@/app/_components/Provider/TanstackProvider";
import UserContextProvider from "@/app/_components/Provider/UserContextProvider";

import LeftLayout from "@/app/_components/Layout/LeftLayout";
import MainLayout from "@/app/_components/Layout/MainLayout";

import Topbar from "@/app/_components/Nav/Topbar";
import LeftBar from "@/app/_components/Nav/LeftBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <TanstackProvider>
        <UserContextProvider>
          <Topbar />
          <div className=" flex min-h-screen w-full">
            <LeftLayout className="z-20 hidden h-full w-28 md:fixed md:block xl:w-40">
              <LeftBar />
            </LeftLayout>
            <MainLayout className="mx-0 mt-16 w-full bg-background p-2 md:ml-28 xl:ml-40">
              {children}
            </MainLayout>
          </div>
        </UserContextProvider>
      </TanstackProvider>
    </ToastProvider>
  );
}
