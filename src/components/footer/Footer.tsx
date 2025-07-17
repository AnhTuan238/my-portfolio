import { useTranslations } from "next-intl";

import IconList from "@/components/footer/icon-list";

function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();
  return (
    <footer
      aria-label="Site footer"
      className="flex items-center justify-center bg-white"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-4 py-10 w-full max-w-7xl lg:px-7.5 lg:flex-row">
        {/* Author */}
        <p className="text-black text-sm">
          © {currentYear}.{" "}
          {t.rich("author", {
            highlight: (chunks) => (
              <strong className="text-primary">{chunks}</strong>
            ),
          })}
        </p>

        {/* Contact */}
        <ul className="flex gap-10">
          <IconList />
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
