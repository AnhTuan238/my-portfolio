import { useTranslations } from "next-intl";
import Image from "next/image";

function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="section px-0 lg:p-0 lg:pt-45">
      {/* Title */}
      <div className="mb-9 lg:mb-18">
        <h3 className="heading lg:mb-6 lg:text-6xl">{t("title")}</h3>
        <p className="des-for-tit lg:text-xl">
          {t.rich("subtitle", {
            linebreak: () => <br />,
          })}
        </p>
      </div>

      {/* Content */}
      <div className="bg-background">
        <div className="content-wrapper relative px-5 lg:px-0">
          <div className="line lg:left-[50%]"></div>
          {/* Top */}
          <div className="relative grid grid-cols-1 items-center py-15 lg:py-30 lg:grid-cols-2">
            <div className="order-2 flex flex-col p-5 pb-0 before:absolute before:inline-block before:w-2.5 before:h-2.5 before:top-0 before:left-0 before:-translate-y-1/2 before:-translate-x-1/2 before:border before:border-gray-400 before:rounded-[50%] lg:order-1 lg:before:left-[50%] lg:pl-0 lg:pr-20">
              <h3 className="mt-3 text-2xl font-semibold lg:text-4xl lg:mt-0">
                {t("fullName")}
              </h3>
              <p className="des-for-tit text-justify lg:text-lg">
                {t.rich("descriptionForName", {
                  highlight: (chunks) => (
                    <strong className="text-primary">{chunks}</strong>
                  ),
                })}
              </p>
            </div>
            <Image
              src="/images/about-3.gif"
              alt="ho-anh-tuan"
              width={640}
              height={470}
              className="order-1 lg:order-2"
            />
          </div>

          {/* Bottom */}
          <div className="relative grid grid-cols-1 items-center py-15 lg:py-30 lg:grid-cols-2">
            <Image
              src="/images/my-skill.png"
              alt="my-skills"
              width={640}
              height={470}
              className="justify-self-end"
            />
            <div className="flex flex-col p-5 before:absolute before:inline-block before:w-2.5 before:h-2.5 before:left-0 before:top-0 before:-translate-y-1/2 before:-translate-x-1/2 before:border before:border-gray-400 before:rounded-[50%] lg:pt-0 lg:pl-20 lg:before:left-[50%]">
              <h3 className="mt-3 text-2xl lg:text-4xl font-semibold lg:mt-0">
                {t("skill")}
              </h3>
              <p className="des-for-tit text-justify lg:text-lg">
                {t.rich("descriptionForSkill", {
                  highlight: (chunks) => (
                    <strong className="text-primary">{chunks}</strong>
                  ),
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
