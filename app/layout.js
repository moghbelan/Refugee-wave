"use client";
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const swiza = localFont({
  src: [
    { path: "/fonts/swiza-regular-webfont.woff2", weight: "400", style: "normal" },
    { path: "/fonts/swiza-medium-webfont.woff2", weight: "500", style: "normal" },
  ],
});

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={`${swiza.className} antialiased`}>{children}</body>
      </html>
    </SessionProvider>
  );
}
