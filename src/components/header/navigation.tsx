"use client";

import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScroll } from "@/context/scroll-context";
import { HeaderItemType } from "@/lib/interface";

function Navigation({ navLinks }: { navLinks: HeaderItemType[] }) {
  const { activeSectionId } = useActiveSection(navLinks);
  const scrollToSection = useScrollToSection();
  const { shrink, setShrink } = useScroll();

  const handleClick = async (id: string) => {
    setShrink(true);
    await scrollToSection(id);
  };

  return (
    <nav className="h-full content-center">
      <div className="z-2 fixed top-0 w-full bg-white px-5 m-auto border-b border-border lg:relative lg:w-130 lg:border-none">
        <ul className="flex justify-between">
          {navLinks.map((link) => (
            <li key={link.id} className="h-15 content-center">
              <a
                aria-label={`Go to ${link.title} section`}
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
  );
}

export default Navigation;
