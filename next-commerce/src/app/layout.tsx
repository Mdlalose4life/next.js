import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { title } from "process";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "nextcommerce",
  description: "Shop now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="p-4 max-w-7x1 m-auto min-w-[300px]">
        {children}          
        </main>
      </body>
    </html>
  );
}
