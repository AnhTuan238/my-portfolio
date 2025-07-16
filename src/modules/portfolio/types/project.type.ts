import { TechnologyType } from "@/modules/portfolio/types";

export interface ProjectType {
  id: string;
  projectName: string;
  description: string;
  thumbnail?: {
    url: string;
    alt?: string;
    filename: string;
  };
  technologies: TechnologyType[];
  githubLink: string;
  demoLink: string;
  filename: string;
  techs: TechnologyType[];
}
