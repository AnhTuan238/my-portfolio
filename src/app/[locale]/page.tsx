import { fetchPortfolioData } from "@/modules/portfolio/services/portfolio.service";
import Experience from "@/modules/portfolio/components/Experience/Experience";
import Project from "@/modules/portfolio/components/Project/Project";
import About from "@/modules/portfolio/components/About/About";
import Hero from "@/modules/portfolio/components/Hero/Hero";

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
