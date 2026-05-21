import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vivek Sai Alajpur",
  description:
    "Production Engineer specializing in SMT/THT manufacturing, DFM validation, embedded systems, and scalable electronics production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} bg-[#F3F4F1] text-[#111111] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}