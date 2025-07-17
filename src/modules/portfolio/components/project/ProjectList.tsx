import { ProjectType } from "@/modules/portfolio/types";
import AnimatedWrapper from "@/components/animation/AnimatedWrapper";
import ProjectCard from "@/modules/portfolio/components/project/ProjectCard";

export default function ProjectList({ projects }: { projects: ProjectType[] }) {
  return (
    <AnimatedWrapper
      direction="up"
      delay={0.1}
      className="w-full justify-between gap-4 lg:w-223 grid grid-cols-2 md:grid-cols-3 lg:gap-10"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </AnimatedWrapper>
  );
}
