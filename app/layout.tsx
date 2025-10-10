import type { Metadata } from "next";
import { Montserrat, Lora } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ReelBama - Alabama Fishing Community | Bass Fishing, Tournaments & Lake Reports",
  description: "Join Alabama's premier fishing community! Get fishing reports, tournament results, lake maps, and connect with local anglers. Expert tips for bass fishing in Alabama waters.",
  keywords: [
    "Alabama fishing", "bass fishing Alabama", "Alabama fishing tournaments", 
    "Alabama lakes", "fishing guides Alabama", "Lake Guntersville fishing",
    "Mobile Bay fishing", "Alabama fishing reports", "bass fishing tips",
    "Alabama fishing community", "fishing tournaments Alabama", "Alabama fishing spots"
  ],
  authors: [{ name: "Captain Billy 'Bass' Thompson" }],
  creator: "ReelBama",
  publisher: "ReelBama",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://reelbama.com',
  },
  openGraph: {
    title: "ReelBama - Alabama's Premier Fishing Community",
    description: "Join Alabama's premier fishing community! Get fishing reports, tournament results, lake maps, and connect with local anglers. Expert tips for bass fishing in Alabama waters.",
    type: "website",
    url: "https://reelbama.com",
    images: [
      {
        url: "/assets/images/ai-generated-reelbama-merch.png",
        width: 1200,
        height: 630,
        alt: "Alabama fishing community - ReelBama",
      },
    ],
    siteName: "ReelBama",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReelBama - Alabama's Premier Fishing Community",
    description: "Join Alabama's premier fishing community! Get fishing reports, tournament results, lake maps, and connect with local anglers.",
    images: ["/assets/images/ai-generated-reelbama-merch.png"],
    creator: "@reelbama",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <StructuredData />
      </head>
      <body
        className={`${montserrat.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
