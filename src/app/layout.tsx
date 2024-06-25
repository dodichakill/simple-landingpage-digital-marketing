import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const APP_TITLE = "Xoss-Camp - Tes Interview";
const APP_DESCRIPTION =
  "A simple landing page about bootcamp digital marketing Xoss-Campp (to deliver test interview)";

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  icons: "/favicon.ico",
  openGraph: {
    title: APP_TITLE,
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
