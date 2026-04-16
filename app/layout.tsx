import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevPortfolio | Membangun Solusi Web Terukur",
  description: "DevPortfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${notoSerif.variable} ${manrope.variable} scroll-smooth antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Navbar />
        {children}
        <Footer />
        <Script src="https://pl29163723.profitablecpmratenetwork.com/55/c2/04/55c204d547e57806242c6cf897505e81.js" strategy="afterInteractive" />
        <Script src="https://pl29163725.profitablecpmratenetwork.com/3e/d7/81/3ed781b9c218aa46fd96ce304662ccbe.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
