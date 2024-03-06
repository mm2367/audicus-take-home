import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Milam x Audicus Take Home Text ",
  description: "Milam's take home assessment for Audicus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
