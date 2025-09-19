import type { Metadata, Viewport } from "next";
import {
  Inter as FontSans,
  JetBrains_Mono as FontMono,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "./components/Header";
import { SpeedInsights } from '@vercel/speed-insights/next';

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
// const roboto = Roboto({ weight: "900", subsets: ["latin"] });

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "SuperDanko - Premium Peanut Butter",
  description: "SuperDanko is not your ordinary peanut butter. Explore our lineup of nutrient-packed, flavor-loaded superhero butters crafted with powerful ingredients to fuel your body and mind.",
  keywords: ["peanut butter", "premium", "superfood", "nutrition", "protein", "healthy"],
  authors: [{ name: "SuperDanko Team" }],
  openGraph: {
    title: "SuperDanko - Premium Peanut Butter",
    description: "SuperDanko is not your ordinary peanut butter. Explore our lineup of nutrient-packed, flavor-loaded superhero butters.",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
            fontMono.variable,
            fontHeading.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey=""
          >
            <div className="flex flex-col ">
              <Header />
              <div className="flex flex-1 overflow-hidden relative">{children}</div>
            </div>
          </ThemeProvider>
          <Toaster position="bottom-center" richColors theme="dark" />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}

// For custom background color use class: bg-custom-gradient

// This should ensure my app respects the theme settings, whether "light" or "dark": Add  storageKey=''
// property to ThemeProvider.
