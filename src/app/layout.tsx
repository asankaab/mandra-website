import type { Metadata } from "next";
import { Baskervville, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import "@/styles/main.css";
import Header from "@/components/Header";

const BaskervvilleSerif = Baskervville({
  variable: "--font-Baskervville",
  subsets: ["latin"],
  weight: "400"
});

const BricolageGrotesqueSans = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mandra",
  description: "Mandra photography portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${BaskervvilleSerif.variable} ${BricolageGrotesqueSans.className}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
