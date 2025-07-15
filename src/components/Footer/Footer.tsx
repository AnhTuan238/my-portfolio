import { useTranslations } from "next-intl";

import IconList from "@/components/Icon/IconList";

function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer
      aria-label="Site footer"
      className="flex items-center justify-center bg-white"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-4 py-10 w-full max-w-7xl lg:flex-row">
        <p className="text-black text-sm">
          © {new Date().getFullYear()}.{" "}
          {t.rich("author", {
            highlight: (chunks) => (
              <strong className="text-primary">{chunks}</strong>
            ),
          })}
        </p>
        <ul className="flex gap-10">
          <IconList />
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
