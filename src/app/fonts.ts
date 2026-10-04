import { Instrument_Sans, Pixelify_Sans } from "next/font/google";

export const pixel = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const text = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-text",
});
