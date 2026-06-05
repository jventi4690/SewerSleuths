import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sewer Sleuths — Sewer Scope & Radon Testing",
  description:
    "Professional sewer scope inspections and radon testing. Protect your home with Sewer Sleuths.",
  metadataBase: new URL("https://sewersleuths.com"),
  icons: {
    icon: "/images/Logo (black).png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
