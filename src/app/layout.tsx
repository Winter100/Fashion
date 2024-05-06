import "./globals.css";
import dynamic from "next/dynamic";
import { Dongle } from "next/font/google";

const dongle = Dongle({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const DynamicDarkModeProvider = dynamic(
  () => import("./_components/Provider/DarkModeProvider"),
  { ssr: false },
);

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
    <html lang="ko" className="dark scrollbar-hide">
      <body
        className={`${dongle.className} bg-backgroundOne text-fontColor/70`}
      >
        <DynamicDarkModeProvider>{children}</DynamicDarkModeProvider>
      </body>
    </html>
  );
}
