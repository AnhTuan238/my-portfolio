import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Outfit } from "next/font/google";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

import BackToTopButton from "@/components/back-to-top/back-to-top-button";
import { ScrollProvider } from "@/context/scroll-context";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "@/app/globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anh Tuan - Portfolio",
  description:
    "This is Anh Tuan's portfolio showcasing projects, skills, and contact information.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={`${outfit.variable} antialiased`}>
        <NextIntlClientProvider>
          <ScrollProvider>
            <Header />
            {children}
            <Footer />
            <BackToTopButton />
          </ScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
