import { Inter, Montserrat } from "next/font/google";
import React from "react";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-source-sans-pro",
});

export const metadata = {
  title: "ArtiSync",
  description: "Manage your articles easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${montserrat.className} bg-white-500 h-screen w-screen px-20 py-6`}
      >
        {children}
      </body>
    </html>
  );
}
