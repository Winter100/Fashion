import MainLayout from "./_components/Layout/MainLayout";
import MainNavBar from "./_components/Nav/MainNavBar";
import "./globals.css";
import { Dongle } from "next/font/google";

const dongle = Dongle({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "오늘 어때?",
  description: "한장의 사진으로 오늘 하루를 기록해보세요!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${dongle.className}`}>
        <MainNavBar />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
