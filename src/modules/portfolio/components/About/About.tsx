import { useTranslations } from "next-intl";
import Image from "next/image";

import AnimatedWrapper from "@/components/animation/AnimatedWrapper";

function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="section px-0 lg:p-0 lg:pt-45">
      {/* Title */}
      <AnimatedWrapper
        className="px-5 mb-9 lg:mb-18"
        direction="up"
        delay={0.1}
      >
        <h3 className="heading lg:mb-6 lg:text-6xl">{t("title")}</h3>
        <p className="des-for-tit lg:text-xl">
          {t.rich("subtitle", {
            linebreak: () => <br />,
          })}
        </p>
      </AnimatedWrapper>

      {/* Content */}
      <div className="bg-background">
        <div className="content-wrapper relative px-5 lg:px-0">
          <div className="line lg:left-[50%]"></div>
          {/* Top */}
          <div className="overflow-hidden relative grid grid-cols-1 items-center py-15 lg:py-30 lg:grid-cols-2">
            <AnimatedWrapper
              direction="left"
              delay={0.1}
              className="order-2 flex flex-col p-5 pb-0 before:absolute before:inline-block before:w-2.5 before:h-2.5 before:top-0 before:left-0 before:-translate-y-1/2 before:-translate-x-1/2 before:border before:border-gray-400 before:rounded-[50%] lg:order-1! lg:before:left-[50%] lg:pl-0 lg:pr-20"
            >
              {" "}
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
            </AnimatedWrapper>

            <AnimatedWrapper
              direction="right"
              delay={0.1}
              className="animation-image order-1 lg:order-2"
            >
              <div className="relative w-[640px] h-[430px] overflow-hidden">
                <Image src="/images/about-3.gif" alt="ho-anh-tuan" fill />
              </div>
            </AnimatedWrapper>
          </div>

          {/* Bottom */}
          <div className="overflow-hidden relative grid grid-cols-1 items-center py-15 lg:py-30 lg:grid-cols-2">
            <AnimatedWrapper
              direction="left"
              delay={0.1}
              className="animation-image justify-self-end"
            >
              <div className="relative w-[640px] h-[430px] overflow-hidden">
                <Image src="/images/my-skill.png" alt="my-skills" fill />
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper
              direction="right"
              delay={0.1}
              className="flex flex-col p-5 before:absolute before:inline-block before:w-2.5 before:h-2.5 before:left-0 before:top-0 before:-translate-y-1/2 before:-translate-x-1/2 before:border before:border-gray-400 before:rounded-[50%] lg:pt-0 lg:pl-20 lg:before:left-[50%]"
            >
              {" "}
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
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
