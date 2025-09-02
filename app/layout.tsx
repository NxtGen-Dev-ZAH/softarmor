import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SoftArmor - Gants en Cuir de Luxe | Leather Gloves",
  description:
    "Découvrez notre collection de gants en cuir français de haute qualité. Élégance, confort et savoir-faire artisanal pour toutes les saisons.",
  keywords:
    "gants cuir, leather gloves, gants français, luxury gloves, winter gloves",
  authors: [{ name: "SoftArmor" }],
  creator: "SoftArmor",
  publisher: "SoftArmor",
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
