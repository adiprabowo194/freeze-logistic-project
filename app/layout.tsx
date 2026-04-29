import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";

// --- IMPORT CSS ---
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

// --- IMPORT KOMPONEN ---
import Navbar from "@/components/Navbar";

config.autoAddCss = false;

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://freezelogistics.com.au"),
  title: {
    default: "Freeze Logistics | Refrigerated Transport & Cold Chain Australia",
    template: "%s | Freeze Logistics",
  },
  description:
    "Freeze Logistics provides premium frozen goods delivery and cold chain solutions across Australia.",
  verification: {
    google: "ZO2KP_6qSUrVmXpRGdKDPlxiXDxId1IRw49xIwhCCMo",
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
        {/* 1. Google Tag Manager - Bagian Head */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TKNRRBJ7');
          `}
        </Script>

        {/* Google Analytics (Opsional jika sudah pakai GTM, tapi tidak apa-apa jika tetap dipasang) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PBV5K5CPSE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PBV5K5CPSE');
          `}
        </Script>
      </head>
      <body className={fontPoppins.className}>
        {/* 2. Google Tag Manager (noscript) - Bagian Body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TKNRRBJ7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
