import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// 1. Urutan Import CSS: Global CSS harus di atas agar bisa di-override library lain jika perlu
import "./globals.css";

// 2. Import Font/Icon Libraries
import "remixicon/fonts/remixicon.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

// 3. Import Komponen
import Navbar from "@/components/Navbar";

// Mencegah FontAwesome menambahkan CSS secara otomatis karena sudah di-import manual di atas
config.autoAddCss = false;

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  // 1. Critical: Ensures all relative links (images/assets) use your live domain instead of localhost
  metadataBase: new URL("https://freezelogistics.com.au"),

  // 2. SEO-optimized Title (Brand + Primary Services)
  title: {
    default: "Freeze Logistics | Refrigerated Transport & Cold Chain Australia",
    template: "%s | Freeze Logistics",
  },

  // 3. Main Description (Balanced for readability and keywords)
  description:
    "Freeze Logistics provides premium frozen goods delivery, cold storage, and refrigerated transport solutions across Australia. Secure, timely, and reliable cold chain logistics services you can trust. Australia's leading provider for frozen goods delivery and temperature-controlled logistics. Secure, reliable, and timely cold chain solutions.",

  // 4. Search Keywords (Translated and expanded for the AU market)
  keywords: [
    "Refrigerated Transport Australia",
    "Cold Chain Logistics",
    "Frozen Goods Delivery",
    "Freeze Logistics",
    "Temperature Controlled Transport",
    "Chilled Freight Services",
    "Refrigerated Courier Victoria",
  ],

  icons: {
    icon: "/assets/logo_freeze_logistics_nav.ico",
    shortcut: "/assets/logo_freeze_logistics_nav.ico",
    apple: "/assets/logo_freeze_logistics_nav.ico",
  },

  // 5. OpenGraph for Social Media (WhatsApp, LinkedIn, FB)
  openGraph: {
    title: "Freeze Logistics | Professional Cold Chain Solutions",
    description:
      "Expert frozen and refrigerated logistics solutions in Australia. Guaranteed temperature integrity with our modern fleet and professional team.",
    url: "https://freezelogistics.com.au",
    siteName: "Freeze Logistics",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/assets/logo_freeze_logistics.93c421ff.webp",
        width: 1200,
        height: 630,
        alt: "Freeze Logistics Australia - Refrigerated Transport",
      },
    ],
  },

  // 6. Twitter/X Card
  twitter: {
    card: "summary_large_image",
    title: "Freeze Logistics | Refrigerated Transport Specialists",
    description:
      "Reliable refrigerated transport and cold chain logistics across Australia.",
    images: ["/assets/logo_freeze_logistics.93c421ff.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontPoppins.className} `}>
        <Navbar />
        <>{children}</>
      </body>
    </html>
  );
}
