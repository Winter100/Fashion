import MainLayout from "./_components/Layout/MainLayout";
import MainNavBar from "./_components/Nav/MainNavBar";
import TanstackProvider from "./_components/Provider/TanstackProvider";
import User from "./_context/ContextProvider";
import "./globals.css";
import { Dongle } from "next/font/google";

const dongle = Dongle({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "오늘 어때?",
  description: "오늘 하루의 패션을 한장의 사진으로 기록해보세요!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${dongle.className}`}>
        <TanstackProvider>
          <User>
            <MainNavBar />
            <MainLayout>{children}</MainLayout>
          </User>
        </TanstackProvider>
      </body>
    </html>
  );
}
