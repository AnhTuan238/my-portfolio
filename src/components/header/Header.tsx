import { useTranslations } from "next-intl";
import Link from "next/link";

import LocaleSwitcher from "@/components/header/local-switcher";
import Navigation from "@/components/header/navigation";

function Header() {
  const t = useTranslations("Header");
  const navLinks = [
    {
      id: "about",
      title: t("About"),
    },
    {
      id: "experience",
      title: t("Experience"),
    },
    {
      id: "projects",
      title: t("Project"),
    },
  ];

  return (
    <header
      aria-label="Site header"
      className="z-4 lg:fixed lg:top-0 lg:w-full lg:h-19 lg:bg-white lg:border-b lg:border-border"
    >
      {/* Logo */}
      <Link
        href="/"
        className="absolute top-10 left-5 z-4 lg:top-5.5 lg:left-7.5"
      >
        <h1 className="text-2xl text-white font-bold lg:text-black">ANHTUAN</h1>
      </Link>

      {/* Navigation */}
      <Navigation navLinks={navLinks} />

      {/* Change language */}
      <LocaleSwitcher />
    </header>
  );
}

export default Header;
