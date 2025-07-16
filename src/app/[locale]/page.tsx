import { fetchPortfolioData } from "@/modules/portfolio/services/portfolio.service";
import Experience from "@/modules/portfolio/components/experience/Experience";
import Project from "@/modules/portfolio/components/project/Project";
import About from "@/modules/portfolio/components/about/About";
import Hero from "@/modules/portfolio/components/hero/Hero";

export default async function Home() {
  const { experiences, projects, skills } = await fetchPortfolioData();

  return (
    <>
      <Hero />
      <About />
      <Experience experiencesData={experiences} />
      <Project projectsData={projects} skillsData={skills} />
    </>
  );
}
