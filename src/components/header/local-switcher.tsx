"use client";

import { RiGlobalLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const languages = [
    { title: "EN", value: "en" },
    { title: "VN", value: "vi" },
  ];

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${selectedLocale}`);
    });
  };

  return (
    <div className="z-4 absolute top-9.5 right-5 flex items-center gap-1 text-white lg:top-5 lg:text-black">
      <RiGlobalLine size={25} />
      <select
        aria-label="Select language"
        value={locale}
        onChange={handleChangeLanguage}
        disabled={isPending}
        className="p-2 text-sm font-extrabold cursor-pointer focus:outline-none"
      >
        {languages.map((language) => {
          return (
            <option
              key={language.value}
              value={language.value}
              className="text-black text-sm font-extrabold"
            >
              {language.title}
            </option>
          );
        })}
      </select>
    </div>
  );
}
