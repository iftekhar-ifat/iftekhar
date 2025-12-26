import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Iftekhar",
    template: "%s | Iftekhar",
  },
  description: "Iftekhar's Portfolio",
  openGraph: {
    title: "Iftekhar",
    description: "Iftekhar's Portfolio",
    type: "profile",
    images: "./opengraph-image.png",
  },
  twitter: {
    title: "Iftekhar",
    description: "Iftekhar's Portfolio",
    card: "summary_large_image",
    images: "./opengraph-image.png",
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
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex flex-1 flex-col">{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
      {/* <Analytics /> */}
    </html>
  );
}
