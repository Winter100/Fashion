import "./globals.css";
import dynamic from "next/dynamic";
import localFont from "next/font/local";

import { getMetaData } from "./_lib/utils/metadata";

const DynamicDarkModeProvider = dynamic(
  () => import("./_provider/DarkModeProvider"),
  { ssr: false },
);

export const metadata = getMetaData();

const myfont = localFont({
  src: [
    {
      path: "./_lib/fonts/Dongle-Regular.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scrollbar-hide">
      <body
        className={`${myfont.className} font-Dongle bg-backgroundOne text-fontColor`}
      >
        <DynamicDarkModeProvider>{children}</DynamicDarkModeProvider>
      </body>
    </html>
  );
}
