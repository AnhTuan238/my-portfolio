"use client";

import { TechType } from "@/modules/portfolio/types/project.type";

interface Props {
  skills: TechType[];
  selectedSkillId: string | null;
  onSelect: (id: string | null) => void;
}

export default function SkillList({
  skills,
  selectedSkillId,
  onSelect,
}: Props) {
  return (
    <div className="flex gap-4 overflow-scroll scrollbar-hide lg:overflow-hidden lg:flex-col">
      <button
        onClick={() => onSelect(null)}
        className={
          selectedSkillId === null
            ? "filter-item bg-primary text-white"
            : "filter-item"
        }
      >
        All
      </button>
      {skills.map((skill) => (
        <button
          key={skill.id}
          onClick={() => onSelect(skill.id)}
          className={
            selectedSkillId === skill.id
              ? "filter-item bg-primary text-white"
              : "filter-item"
          }
        >
          {skill.name}
        </button>
      ))}
    </div>
  );
}
