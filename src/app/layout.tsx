import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { CommandPalette } from "@/components/shared/CommandPalette";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import "./globals.css";
import { META } from "@/constants/meta";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(META.url),
  title: "Himank Garg",
  description: META.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: META.url,
    siteName: META.name,
    title: META.title,
    description: META.description,
    images: [
      {
        url: META.ogImage,
        width: 1200,
        height: 630,
        alt: META.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META.title,
    description: META.description,
    images: [META.ogImage],
  },
  authors: [{ name: META.name }],
  creator: META.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <ScrollProgress />
          <CommandPalette />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
