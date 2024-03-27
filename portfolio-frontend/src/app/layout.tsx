import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Chat } from "@/components/Chat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahil Tiwaskar",
  description: "Portfolio website of Sahil Tiwaskar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white">
        <div className="flex flex-col gap-5 p-5 justify-center md:w-2/3 w-screen mx-auto overflow-hidden">
          <Navbar/>
          {children}
        </div>
      </body>
    </html>
  );
}
