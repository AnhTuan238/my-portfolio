"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import ProjectList from "@/modules/portfolio/components/project/ProjectList";
import SkillList from "@/modules/portfolio/components/project/SkillList";
import { ProjectType, TechnologyType } from "@/modules/portfolio/types";
import AnimatedWrapper from "@/components/animation/AnimatedWrapper";

interface ProjectItemType {
  projectsData: ProjectType[];
  skillsData: TechnologyType[];
}

export default function Project({ projectsData, skillsData }: ProjectItemType) {
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);

  const filteredProjects = selectedSkillId
    ? projectsData.filter((project) =>
        project.technologies.some((tech) => tech.id === selectedSkillId)
      )
    : projectsData;

  const t = useTranslations("Project");

  return (
    <section id="projects" className=" pt-17 lg:pt-45">
      {/* Title */}
      <AnimatedWrapper
        direction="up"
        delay={0.1}
        className="px-5 mb-9 lg:mb-18"
      >
        <h3 className="title lg:mb-6 lg:text-6xl">{t("title")}</h3>
        <p className="subtitle lg:text-xl">
          {t("subtitle.part1")}
          <br />
          {t("subtitle.part2")}
        </p>
      </AnimatedWrapper>

      <div className="bg-background">
        <div className="max-w-7xl m-auto grid grid-cols-1 gap-5 px-5 pt-10 pb-20 lg:grid-cols-4 lg:min-h-150 lg:gap-0 lg:py-20 lg:px-7.5">
          <div className="lg:col-span-1">
            <SkillList
              skills={skillsData}
              selectedSkillId={selectedSkillId}
              onSelect={setSelectedSkillId}
            />
          </div>
          <div className="lg:col-span-3 lg:justify-self-end">
            <ProjectList projects={filteredProjects} />
          </div>
        </div>
      </div>
    </section>
  );
}
