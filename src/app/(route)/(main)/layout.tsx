import ToastProvider from "@/app//_components/Provider/ToastProvider";
import TanstackProvider from "@/app/_components/Provider/TanstackProvider";
import UserContextProvider from "@/app/_components/Provider/UserContextProvider";

import LeftLayout from "@/app/_components/Layout/LeftLayout";
import MainLayout from "@/app/_components/Layout/MainLayout";
import RightLayout from "@/app/_components/Layout/RightLayout";

import Topbar from "@/app/_components/Nav/Topbar";
import LeftBar from "@/app/_components/Nav/LeftBar";

export default function Layout({
  children,
  right,
}: {
  children: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <TanstackProvider>
        <UserContextProvider>
          <Topbar />
          <div className=" flex min-h-screen w-full">
            <LeftLayout>
              <LeftBar />
            </LeftLayout>
            <MainLayout>{children}</MainLayout>
            <RightLayout>{right}</RightLayout>
          </div>
        </UserContextProvider>
      </TanstackProvider>
    </ToastProvider>
  );
}
