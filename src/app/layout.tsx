import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TOY AI - Monitoring Tizimi | IMAX IT Company",
  description:
    "Soliq organlari uchun to'yxonalarni monitoring qilish platformasi. Kommersiya taklifi.",
  keywords: [
    "TOY AI",
    "monitoring",
    "toyxona",
    "soliq",
    "AI",
    "IMAX IT",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
