import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greg's My Agent - Your Trusted Real Estate & Insurance Expert in Los Angeles",
  description: "Professional real estate and insurance services in Los Angeles. Greg is your trusted agent for buying, selling, and insurance needs.",
  keywords: "real estate, insurance, Los Angeles, Greg's My Agent, buyers agent, sellers agent, mortgage, home insurance",
  metadataBase: new URL('https://www.gregsmyagent.com'),
  openGraph: {
    title: "Greg's My Agent - Your Trusted Real Estate & Insurance Expert in Los Angeles",
    description: "Professional real estate and insurance services in Los Angeles.",
    url: 'https://www.gregsmyagent.com',
    type: "website",
    locale: "en_US",
    siteName: "Greg's My Agent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
