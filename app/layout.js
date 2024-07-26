import { Inter } from "next/font/google";
import { MuseoModerno } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const regular_font_init = DM_Sans({ subsets: ["latin"] });

const brand_font_init = MuseoModerno({
  weight: '400',
  subsets: ["latin"],
  display: "swap",
  variable: "--brand_font",
});

export const metadata = {
  title: "Imperium",
  description: "Powered by NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${regular_font_init.className} ${brand_font_init.variable}`}>{children}</body>
    </html>
  );
}
