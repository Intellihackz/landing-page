import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tridev Technologies INC",
  description: "Technological inclusion ",
  keywords:
    "Technological inclusion, Technonology, financial inclusion, Tridev, Tridev Technologies , Educational inclusion, Medical inclusion , Inclusion , Oluwatobiloba Co-fouuder of Tridev, Oluyemi Co founder of Tridev, Samuel Co founder of Tridev, Startup in nigeria ,  nigeria best Under 18 Startup ",
  openGraph: {
    type: "website",
    title: "Tridev",
    description: "Technological inclusion",
    siteName: "Tridev Technologies",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1742792917834485760/DWxtlBSe_400x400.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="https://pbs.twimg.com/profile_images/1742792917834485760/DWxtlBSe_400x400.jpg"
        type="image/x-icon"
      />
      <body className={inter.className}>
        {children} <Analytics /> <SpeedInsights />
      </body>
    </html>
  );
}
