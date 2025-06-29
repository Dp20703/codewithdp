import Navbar from "../components/layout/Navbar";
import ProjectCard from "../components/sections/ProjectCard";

const Projects = () => {
  return (
    <>
      <section className="h-fit w-full" style={{ padding: "2rem 2rem" }}>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="w-full">
            <h2 className="text-[#ffffff] text-3xl">Headings</h2>
            <h3 className="text-[#4e4e4e] text-2xl">subheading</h3>
          </div>

          <div className="flex gap-5 flex-wrap items-center justify-start">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
