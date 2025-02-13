import localFont from "next/font/local";
import "./globals.css";

const swiza = localFont({
  src: [
    {
      path: "/fonts/swiza-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },

    {
      path: "/fonts/swiza-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Refugee-wave",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"${swiza.className}antialsed"}>{children}</body>
    </html>
  );
}
