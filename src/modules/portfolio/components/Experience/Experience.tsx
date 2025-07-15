import { getTranslations } from "next-intl/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ExperienceType } from "@/modules/portfolio/types/experience.type";

export default async function Experience({
  experiencesData,
}: {
  experiencesData: ExperienceType[];
}) {
  const t = await getTranslations("Experience");

  return (
    <section id="experience" className="section lg:p-0 lg:pt-45">
      {/* Title */}
      <div className="mb-9 lg:mb-18">
        <h3 className="heading lg:mb-6 lg:text-6xl">{t("title")}</h3>
        <p className="des-for-tit lg:text-xl">
          {t("subtitle.part1")}
          <br />
          {t("subtitle.part2")}
        </p>
      </div>

      {/* Content */}
      <div className="content-wrapper">
        <Accordion
          type="multiple"
          className="flex flex-col gap-4"
          defaultValue={experiencesData.map(
            (experience) => `item-${experience.id}`
          )}
        >
          {experiencesData.map((experience) => (
            <AccordionItem value={`item-${experience.id}`} key={experience.id}>
              <AccordionTrigger className="px-4 items-center text-xl text-black font-bold bg-[#D9D9D9] cursor-pointer rounded-2xl no-underline hover:no-underline lg:text-2xl">
                {experience.company}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-8 bg-[#E4E0E0] rounded-2xl">
                <p className="mt-2 mb-1 text-lg text-black font-bold lg:text-xl">
                  {experience.role}
                </p>
                <time className="text-base text-black font-bold">
                  {experience.time}
                </time>
                <p
                  className="des-for-tit mt-2 text-justify text-sm lg:text-lg"
                  dangerouslySetInnerHTML={{
                    __html: experience.description.replace(/\n/g, "<br />"),
                  }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
