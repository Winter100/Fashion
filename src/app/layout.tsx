import "./globals.css";
import dynamic from "next/dynamic";
import { Dongle } from "next/font/google";
import { getMetaData } from "./_utils/metadata";

const dongle = Dongle({
  weight: ["400"],
  // weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const DynamicDarkModeProvider = dynamic(
  () => import("./_provider/DarkModeProvider"),
  { ssr: false },
);

export const metadata = getMetaData();

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
