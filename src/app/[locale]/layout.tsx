import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer-temp/Footer";
import { ScrollProvider } from "@/context/scroll-context";
import BackToTopButton from "@/components/back-to-top/back-to-top-button";

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
