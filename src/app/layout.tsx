import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Providers } from './providers/providers';

import "./globals.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Exclusive Packages",
  description: "Test assignement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${montserrat.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
