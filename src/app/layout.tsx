import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tridev Technologies INC",
  description: "Technological inclusion ",
  keywords:
    "Technological inclusion, Technonology, financial inclusion, Tridev, Tridev Technologies , Educational inclusion, Medical inclusion , Inclusion , Oluwatobiloba Co-fouuder of Tridev, Oluyemi Co founder of Tridev, Samuel Co founder of Tridev, Startup in nigeria ,  nigeria best Under 18 Startup ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} <Analytics />
      </body>
    </html>
  );
}
