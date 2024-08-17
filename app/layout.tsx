import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import NavigationWrapper from "./components/NavigationWrapper";
import Footer from "./components/Footer";

const nunitoSans = Nunito_Sans({subsets: ['latin']});

export const metadata: Metadata = {
  title: "BitLyte Studios",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} bg-[#0b0b0b]`}>
        <NavigationWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
