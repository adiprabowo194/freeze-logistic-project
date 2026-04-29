import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import "remixicon/fonts/remixicon.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
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
    "Freeze Logistics provides premium frozen goods delivery across Australia.",
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
        {/* PINDAHKAN KE SINI: Google Analytics wajib di dalam <head> untuk verifikasi */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PBV5K5CPSE"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PBV5K5CPSE');
          `}
        </Script>
      </head>
      <body className={fontPoppins.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
