import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import "modern-normalize/modern-normalize.css";
import { Nunito, Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PuuhNasti",
  description: "Custom rugs - tufting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`container ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
