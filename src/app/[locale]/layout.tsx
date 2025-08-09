import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Outfit } from "next/font/google";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

import BackToTopButton from "@/components/back-to-top/back-to-top-button";
import { ScrollProvider } from "@/context/scroll-context";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { siteMetadata } from "@/utils/siteMetadata";
import "@/app/globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const isVi = locale === "vi";

  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
      template: `%s | ${siteMetadata.title}`,
      default: siteMetadata.title,
    },
    description: isVi ? siteMetadata.viDescription : siteMetadata.enDescription,
    applicationName: siteMetadata.applicationName,
    authors: [{ name: siteMetadata.author }],
    generator: siteMetadata.generator,
    keywords: siteMetadata.keywords,
    creator: siteMetadata.creator,
    publisher: siteMetadata.publisher,
    openGraph: {
      title: siteMetadata.title,
      description: isVi
        ? siteMetadata.viDescription
        : siteMetadata.enDescription,
      url: siteMetadata.siteUrl,
      siteName: siteMetadata.title,
      images: [
        {
          url: siteMetadata.socialBanner || "/images/anh-tuan-dev.png",
          alt: siteMetadata.title,
        },
      ],
      locale: locale === "vi" ? "vi-VN" : "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteMetadata.title,
      description: isVi
        ? siteMetadata.viDescription
        : siteMetadata.enDescription,
      images: [siteMetadata.socialBanner],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

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
