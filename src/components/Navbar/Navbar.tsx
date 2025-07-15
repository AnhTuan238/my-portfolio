"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScroll } from "@/context/ScrollContext";
import { NavbarItemType } from "@/lib/interface";
import LocaleSwitcher from "./local-switcher";

interface MenuProps {
  links: NavbarItemType[];
}

function Navbar() {
  const scrollToSection = useScrollToSection();
  const { shrink, setShrink } = useScroll();
  const t = useTranslations("Navbar");
  const navLinks: NavbarItemType[] = [
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
  const { activeSectionId } = useActiveSection(navLinks);

  const handleClick = async (id: string) => {
    setShrink(true);
    await scrollToSection(id);
  };

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
      <nav className="h-full content-center">
        <div className="z-2 fixed top-0 w-full bg-white px-5 m-auto border-b border-border lg:relative lg:w-130 lg:border-none">
          <ul className="flex justify-between">
            {navLinks.map((link) => (
              <li key={link.id} className="h-15 content-center">
                <a
                  href={`#${link.id}`}
                  className={`text-lg font-bold duration-300 ${
                    activeSectionId === link.id ? "text-primary" : "text-black"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.id);
                  }}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Change language */}
      <LocaleSwitcher />
    </header>
  );
}

export default Navbar;
