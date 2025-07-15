// src/modules/portfolio/services/portfolio.service.ts

import { ProjectType, ExperienceType, TechType } from "@/lib/interface";

interface PortfolioDataType {
  experiences: ExperienceType[];
  projects: ProjectType[];
  skills: TechType[];
}

interface FetchConfig {
  path: string;
  depth?: number;
  extractField?: string;
  errorMessage?: string;
}

async function fetchPayloadData<T>({
  path,
  depth = 2,
  extractField = "docs",
  errorMessage = "Failed to fetch data",
}: FetchConfig): Promise<T> {
  const res = await fetch(
    `${process.env.PAYLOAD_URL}/api/${path}?depth=${depth}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) throw new Error(errorMessage);

  const data = await res.json();
  return data[extractField];
}

export async function fetchPortfolioData(): Promise<PortfolioDataType> {
  const [experiences, projects, skills] = await Promise.all([
    fetchPayloadData<ExperienceType[]>({
      path: "globals/portfolio",
      extractField: "layouts",
      errorMessage: "Failed to fetch experiences",
    }),
    fetchPayloadData<ProjectType[]>({
      path: "projects",
      extractField: "docs",
      errorMessage: "Failed to fetch projects",
    }),
    fetchPayloadData<TechType[]>({
      path: "technologies",
      depth: 1,
      extractField: "docs",
      errorMessage: "Failed to fetch skills",
    }),
  ]);

  return { experiences, projects, skills };
}
