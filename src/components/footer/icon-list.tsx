"use-client";

import { SiGmail, SiZalo } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { memo } from "react";

const iconContacts = [
  {
    id: "gmail",
    label: "Gmail",
    href: "mailto:hoanhtuan23082003@gmail.com",
    icon: <SiGmail size={30} />,
  },
  {
    id: "zalo",
    label: "Zalo",
    href: "https://zalo.me/0941412299",
    icon: <SiZalo size={30} />,
  },
  {
    id: "github",
    label: "Github",
    href: "https://github.com/AnhTuan238",
    icon: <FaGithub size={30} />,
  },
];

function IconList() {
  return (
    <>
      {iconContacts.map((icon) => {
        return (
          <li key={icon.id}>
            <a
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Contact via ${icon.label}`}
            >
              {icon.icon}
            </a>
          </li>
        );
      })}
    </>
  );
}

export default memo(IconList);
