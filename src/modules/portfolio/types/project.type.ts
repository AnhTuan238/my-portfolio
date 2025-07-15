export interface TechType {
  name: string;
  icon: string;
  id: string;
}

export interface ProjectType {
  id: string;
  projectName: string;
  description: string;
  thumbnail?: {
    url: string;
    alt?: string;
    filename: string;
  };
  technologies: TechType[];
  githubLink: string;
  demoLink: string;
  filename: string;
  techs: TechType[];
}
