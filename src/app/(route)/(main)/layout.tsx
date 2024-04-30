import TanstackProvider from "@/app/_components/Provider/TanstackProvider";
import ToastProvider from "@/app//_components/Provider/ToastProvider";
import UserContextProvider from "@/app/_components/Provider/UserContextProvider";
import MainLayout from "@/app/_components/Layout/MainLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <TanstackProvider>
        <UserContextProvider>
          <MainLayout>{children}</MainLayout>
        </UserContextProvider>
      </TanstackProvider>
    </ToastProvider>
  );
}
