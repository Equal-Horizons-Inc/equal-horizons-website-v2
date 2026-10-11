import type { Metadata } from "next";
import "./globals.css";
import { pixel, text } from "./fonts";
import { SITE_URL } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: "Equal Horizons — Open source for everyone",
  description:
    "Equal Horizons is a 501(c)(3) building and supporting high-quality open source software.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Equal Horizons",
    title: "Equal Horizons — Open source for everyone",
    description:
      "Equal Horizons is a 501(c)(3) building and supporting high-quality open source software.",
    images: [
      {
        url: "/Media/Banner_bigger.png",
        width: 1200,
        height: 400,
        alt: "Equal Horizons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equal Horizons — Open source for everyone",
    description:
      "Equal Horizons is a 501(c)(3) building and supporting high-quality open source software.",
    images: ["/Media/Banner_bigger.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NonprofitOrganization",
    name: "Equal Horizons",
    url: SITE_URL,
    logo: `${SITE_URL}/Media/logo.png`,
    description:
      "Equal Horizons is a 501(c)(3) building and supporting high-quality open source software.",
    sameAs: [
      "https://github.com/Equal-Horizons-Inc",
      "https://www.instagram.com/equalhorizonsinc/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Equal Horizons",
    url: SITE_URL,
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${pixel.variable} ${text.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
