import { Inter, Montserrat } from "next/font/google";
import React from "react";
import "../globals.css";

import { NavBar } from "@/components/NavBar";
import Script from "next/script";

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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Example</title>
        <Script src="https://cdn.tailwindcss.com" />
      </head>
      <body
        className={`${inter.className} ${montserrat.className} bg-white-500 px-20 py-6`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
