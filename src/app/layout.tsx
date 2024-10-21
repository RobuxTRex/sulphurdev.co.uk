import type { Metadata } from "next";
import "./globals.css";

import { Fredoka } from 'next/font/google'

const fredoka = Fredoka({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "SulphurDev's Website",
  description: "Holder website for SulphurDev. Primary website can be found here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        {children}
      </body>
    </html>
  );
}
