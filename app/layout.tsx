import type { Metadata } from "next";
import { Montserrat, Lora } from "next/font/google";
import "./globals.css";

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
  title: "ReelBama",
  description: "Your one-stop hub for fishing stories, tournaments, and weekly catches across Alabama waters.",
  keywords: ["Alabama fishing", "bass fishing", "fishing tournaments", "Alabama lakes", "fishing guides"],
  authors: [{ name: "Captain Billy 'Bass' Thompson" }],
  openGraph: {
    title: "ReelBama - Alabama's Premier Fishing Community",
    description: "Your one-stop hub for fishing stories, tournaments, and weekly catches across Alabama waters.",
    type: "website",
    url: "https://reelbama.com",
    images: [
      {
        url: "https://vikingfleet.com/wp-content/uploads/sites/4649/2021/11/2024-11-14-Coxes-1.jpg?resize=1200%2C630&zoom=2",
        width: 1200,
        height: 630,
        alt: "Alabama fishing community - ReelBama",
      },
    ],
    siteName: "ReelBama",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReelBama - Alabama's Premier Fishing Community",
    description: "Your one-stop hub for fishing stories, tournaments, and weekly catches across Alabama waters.",
    images: ["https://vikingfleet.com/wp-content/uploads/sites/4649/2021/11/2024-11-14-Coxes-1.jpg?resize=1200%2C630&zoom=2"],
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
      </head>
      <body
        className={`${montserrat.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
