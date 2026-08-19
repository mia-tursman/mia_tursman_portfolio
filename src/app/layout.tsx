import type { Metadata } from "next";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import { contact } from "@/lib/contact";
import "./globals.css";

// Self-hosted (rather than next/font/google) so builds never depend on
// fetching from fonts.gstatic.com at build time.
const fraunces = localFont({
  src: [
    {
      path: "./fonts/Fraunces-Variable.woff2",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "./fonts/Fraunces-Italic-Variable.woff2",
      weight: "400 700",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-Variable.woff2",
      weight: "400 700",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
  display: "swap",
});

const caveat = localFont({
  src: [
    {
      path: "./fonts/Caveat-Variable.woff2",
      weight: "500 700",
      style: "normal",
    },
  ],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${contact.name} — ${contact.role}`,
    template: `%s — ${contact.name}`,
  },
  description: `Portfolio of ${contact.name}, ${contact.role}.`,
  openGraph: {
    title: `${contact.name} — ${contact.role}`,
    description: `Portfolio of ${contact.name}, ${contact.role}.`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${contact.name} — ${contact.role}`,
    description: `Portfolio of ${contact.name}, ${contact.role}.`,
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
      className={`${fraunces.variable} ${workSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SkipLink />
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
