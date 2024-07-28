import type {Metadata} from "next";
import {Oswald, Signika} from "next/font/google";
import "./globals.css";
import {mergeClassNames as mcn} from "@/lib/utils";
import localFont from "next/font/local";
import GrainEffect from "@/components/visualEffects/grain-effect";
import {Cursor} from "@/components/cursor/cursor";

const LANGUAGE = "en";

// Fonts
const mainFont = Signika({subsets: ["latin"]});
const oswaldFont = Oswald({subsets: ["latin"], variable: "--font-oswald"});
const pixelFont = localFont({
  src: "../public/assets/fonts/pixel_font-7.ttf",
  variable: "--font-pixel",
});

// Metadata
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
    <body className={mcn(mainFont.className, oswaldFont.variable, pixelFont.variable)}>
    <GrainEffect/>
    <Cursor color={"#fff"}/>
    {children}
    </body>
    </html>
  );
}
