import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components";
import { inter } from "@/public/fonts/fonts";

export const metadata: Metadata = {
  title: "Security and System",
  description: "Prueba técnica para desarrollador frontend de Security and System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
