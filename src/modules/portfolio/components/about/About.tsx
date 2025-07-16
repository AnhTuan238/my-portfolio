import { useTranslations } from "next-intl";
import Image from "next/image";

import AnimatedWrapper from "@/components/animation/AnimatedWrapper";

function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="py-17 lg:p-0 lg:pt-45">
      {/* Title */}
      <AnimatedWrapper
        className="px-5 mb-9 lg:mb-18"
        direction="up"
        delay={0.1}
      >
        <h3 className="title lg:mb-6 lg:text-6xl">{t("title")}</h3>
        <p className="subtitle lg:text-xl">
          {t.rich("subtitle", {
            linebreak: () => <br />,
          })}
        </p>
      </AnimatedWrapper>

      {/* Content */}
      <div className="bg-background">
        <div className="relative max-w-7xl m-auto px-5 lg:px-7.5">
          {/* Line */}
          <div className="line lg:left-[50%]"></div>

          {/* Top */}
          <div className="grid grid-cols-1 items-center py-15 overflow-hidden lg:py-30 lg:grid-cols-2">
            <AnimatedWrapper
              direction="left"
              delay={0.1}
              className="order-2 flex flex-col p-5 before:absolute before:inline-block before:w-2.5 before:h-2.5 before:top-0 before:left-5 before:-translate-y-1/2 before:-translate-x-1/2 before:border before:border-gray-400 before:rounded-full lg:order-1! lg:before:left-[50%] lg:pl-0 lg:pr-20"
            >
              {" "}
              <h3 className="mt-3 text-2xl font-semibold lg:mt-0 lg:text-4xl">
                {t("fullName")}
              </h3>
              <p className="subtitle text-justify lg:text-lg">
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
              <div className="relative w-160 h-106 overflow-hidden">
                <Image src="/images/about-3.gif" alt="ho-anh-tuan" fill />
              </div>
            </AnimatedWrapper>
          </div>

          {/* Bottom */}
          <div className="relative grid grid-cols-1 items-center py-15 overflow-hidden lg:py-30 lg:grid-cols-2">
            <AnimatedWrapper
              direction="left"
              delay={0.1}
              className="animation-image justify-self-start lg:justify-self-end"
            >
              <div className="relative w-160 h-106 overflow-hidden">
                <Image src="/images/my-skill.png" alt="my-skills" fill />
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper
              direction="right"
              delay={0.1}
              className="flex flex-col p-5 lg:pt-0 lg:pl-20"
            >
              {" "}
              <h3 className="mt-3 text-2xl font-semibold lg:mt-0 lg:text-4xl">
                {t("skill")}
              </h3>
              <p className="subtitle text-justify lg:text-lg">
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
