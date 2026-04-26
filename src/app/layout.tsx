import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Homemade_Apple } from "next/font/google";
import Script from "next/script";
import JsonLd from "@/components/shared/JsonLd";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const homemadeApple = Homemade_Apple({
  variable: "--font-homemade-apple",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portoitinerary.com"),
  title: {
    default: "Porto Itinerary — Your Complete Porto Travel Guide 2026",
    template: "%s | Porto Itinerary",
  },
  description:
    "Porto travel guide with day-by-day itineraries, restaurant picks, wine cellar tours, and neighborhood guides. Every recommendation personally tested.",
  keywords: [
    "Porto travel guide",
    "Porto itinerary",
    "things to do in Porto",
    "Porto Portugal",
    "port wine cellars",
    "where to eat Porto",
    "Douro Valley",
  ],
  openGraph: {
    siteName: "Porto Itinerary",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P6D9HW5S2H"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P6D9HW5S2H');
          `}
        </Script>
      </head>
      <body className={`${cormorant.variable} ${inter.variable} ${homemadeApple.variable} antialiased`}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Porto Itinerary",
            url: "https://portoitinerary.com",
            description:
              "Porto travel guide with day-by-day itineraries, restaurant picks, wine cellar tours, and neighborhood guides.",
            publisher: {
              "@type": "Organization",
              name: "Porto Itinerary",
              url: "https://portoitinerary.com",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
