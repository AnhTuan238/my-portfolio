"use client";

import { TechnologyType } from "@/modules/portfolio/types";

interface SkillListType {
  skills: TechnologyType[];
  selectedSkillId: string | null;
  onSelect: (id: string | null) => void;
}

export default function SkillList({
  skills,
  selectedSkillId,
  onSelect,
}: SkillListType) {
  return (
    <div className="flex gap-4 overflow-scroll scrollbar-hide lg:overflow-hidden lg:flex-col">
      <button
        onClick={() => onSelect(null)}
        className={`${selectedSkillId === null ? "text-white bg-primary border-none" : "text-text-gray-2"} py-2 px-4 w-fit text-base font-bold rounded-[50px] border border-border whitespace-nowrap cursor-pointer`}
      >
        All
      </button>
      {skills.map((skill) => (
        <button
          key={skill.id}
          onClick={() => onSelect(skill.id)}
          className={`${
            selectedSkillId === skill.id
              ? "text-white bg-primary border-none"
              : "text-text-gray-2"
          } py-2 px-4 w-fit text-base font-bold rounded-[50px] border border-border whitespace-nowrap cursor-pointer`}
        >
          {skill.name}
        </button>
      ))}
    </div>
  );
}
