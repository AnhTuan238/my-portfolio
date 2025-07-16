import { fetchPortfolioData } from "@/modules/portfolio/services/portfolio.service";
import Experience from "@/modules/portfolio/components/experience-temp/Experience";
import Project from "@/modules/portfolio/components/project-temp/Project";
import About from "@/modules/portfolio/components/about-temp/About";
import Hero from "@/modules/portfolio/components/hero-temp/Hero";

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
