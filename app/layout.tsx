import type {Metadata} from "next";
import {Oswald, Signika} from "next/font/google";
import "./globals.css";
import {mergeClassNames as mcn} from "@/lib/utils";
import localFont from "next/font/local";

const FONT_SUBSET = "latin";
const LANGUAGE = "en";
const PIXEL_FONT_PATH = "../public/assets/fonts/pixel_font-7.ttf";

const mainFont = Signika({subsets: [FONT_SUBSET]});
const oswaldFont = Oswald({subsets: [FONT_SUBSET], variable: "--font-oswald"});
const pixelFont = localFont({
  src: PIXEL_FONT_PATH,
  variable: "--font-pixel",
});
export const metadata: Metadata = {
  title: "Marcin Bojara",
  description: "official portfolio",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={LANGUAGE}>
    <body className={mcn(mainFont.className, oswaldFont.variable, pixelFont.variable)}>{children}</body>
    </html>
  );
}
