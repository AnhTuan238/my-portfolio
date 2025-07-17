import Image from "next/image";

import { ProjectType } from "@/modules/portfolio/types";

function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div
      key={project.id}
      className="flex flex-col min-h-87 max-w-[270px] bg-white rounded shadow-custom"
    >
      {/* Image */}
      <Image
        src={project.thumbnail?.url || "/images/loading.jpg"}
        width={270}
        height={120}
        alt="project"
        className="mb-4 h-30!"
      />
      <div className="flex-1 px-4">
        {/* Title */}
        <h4 className="title mb-2 text-xl text-left line-clamp-2 lg:text-2xl">
          {project.projectName}
        </h4>

        {/* Tech */}
        <ul className="flex gap-2 overflow-scroll scrollbar-hide lg:overflow-hidden lg:flex-wrap text-xs text-white text-center font-semibold lg:text-sm">
          {project.technologies.map((tech: any) => (
            <li key={tech.id} className="py-1 px-1.5 bg-primary rounded">
              {tech.name}
            </li>
          ))}
        </ul>

        {/* Description */}
        <p className="subtitle text-sm text-left line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Link */}
      <div className="flex justify-between p-4">
        <a
          className="text-primary font-semibold"
          href={project.githubLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="text-primary font-semibold"
          href={project.demoLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
