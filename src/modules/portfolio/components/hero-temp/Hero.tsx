"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import Image from "next/image";

import { useScroll } from "@/context/scroll-context";

export default function Hero() {
  const { shrink, setShrink } = useScroll();
  const t = useTranslations("Hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className={`${shrink ? "z-1" : "z-3"} relative w-screen h-125 lg:h-screen`}
    >
      {/* Intro */}
      <div
        className={`z-1 absolute left-5 bottom-0 ${shrink ? "hidden" : "flex"} flex-col justify-center h-full lg:left-36`}
      >
        <h2 className="text-[50px] text-white font-bold break-all lg:text-[140px]">
          {t("title")}
        </h2>
        <p className="text-sm text-white font-bold indent-1 lg:indent-3 lg:text-[40px]">
          {t.rich("subtitle", {
            highlight: (chunks) => (
              <strong className="text-primary">{chunks}</strong>
            ),
          })}
        </p>
      </div>

      {/* Banner */}
      <div
        className={`relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full transition-all duration-500 overflow-hidden lg:absolute ${shrink ? "h-30 lg:w-300 lg:h-90" : "h-full lg:h-screen"}`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Image 1 */}
        <Image
          src="/images/banner-1.jpg"
          alt="banner"
          fill
          className="img object-top"
          priority
        />

        {/* Image 2 */}
        <Image
          src="/images/banner-2.jpg"
          alt="banner"
          fill
          className="img object-top"
          priority
        />
      </div>
    </section>
  );
}
