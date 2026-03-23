import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Homemade_Apple } from "next/font/google";
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
    "The best Porto travel guide for 2026. Locally tested itineraries, restaurant picks, wine cellar tours, and neighborhood guides. Plan your trip to Porto, Portugal.",
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
      <body className={`${cormorant.variable} ${inter.variable} ${homemadeApple.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
