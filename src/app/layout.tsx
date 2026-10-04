import type { Metadata } from "next";
import "./globals.css";
import { pixel, text } from "./fonts";

export const metadata: Metadata = {
  title: "Equal Horizons — Open source for everyone",
  description:
    "Equal Horizons is a 501(c)(3) building and supporting high-quality open source software.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${pixel.variable} ${text.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
