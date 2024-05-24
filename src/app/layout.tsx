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
  title: "이 옷 어때?",
  description: "내 패션을 기록하고, 모두에게 자랑해 보세요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scrollbar-hide">
      <body className={`${dongle.className}  bg-backgroundOne text-fontColor`}>
        <DynamicDarkModeProvider>{children}</DynamicDarkModeProvider>
      </body>
    </html>
  );
}
