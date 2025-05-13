import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/lib/components/organisms/Header";
import Footer from "@/lib/components/organisms/Footer";
import ColorBar from "@/lib/components/molecules/Colorbar";
import Card from "@/lib/components/molecules/Card";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tanzschule-lambertz.de"),
  title: "ADTV Tanzschule Lambertz – Tanzkurse in Aachen",
  description:
    "Erleben Sie Tanzfreude in der ADTV Tanzschule Lambertz in Aachen. Entdecken Sie Kurse für Einsteiger, Paare und Fortgeschrittene – mit Herz, Stil und Spaß.",
  keywords: [
    "Tanzschule Aachen",
    "ADTV",
    "Tanzkurse",
    "Tanzen lernen",
    "Discofox",
    "Salsa",
    "Paartanz",
    "Tanzkurs Aachen",
  ],
  openGraph: {
    title: "ADTV Tanzschule Lambertz – Tanzkurse in Aachen",
    description:
      "Tanzen mit Freude: Ihre ADTV Tanzschule in Aachen – jetzt Kurse entdecken und anmelden!",
    url: "https://www.tanzschule-lambertz.de",
    siteName: "ADTV Tanzschule Lambertz",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "https://www.tanzschule-lambertz.de/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ADTV Tanzschule Lambertz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADTV Tanzschule Lambertz – Tanzkurse in Aachen",
    description:
      "Jetzt Tanzkurs starten in Aachen – mit Leidenschaft & Erfahrung!",
    images: ["https://www.tanzschule-lambertz.de/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.tanzschule-lambertz.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" data-theme="light">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div className="fixed inset-0 z-0 overflow-hidden bg-white">
          <video
            className="w-full h-full object-cover"
            src="/chacha.webm"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col">
          <Header />
          <ColorBar />
          <main className="flex-grow px-4 lg:px-40 py-6">
            <div className="min-h-[calc(100vh-theme(spacing.24))]flex items-center justify-center">
              <Card hover={false} className="shadow-xl">
                {children}
              </Card>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
