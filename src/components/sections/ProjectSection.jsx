import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section className="h-fit w-full" style={{ padding: "2rem 4rem" }}>
      <div className="flex flex-col items-center justify-center gap-8">
        <div
          className="w-full flex flex-col gap-2"
          style={{ padding: "0 1rem" }}
        >
          <h2 className="text-[#ffffff] text-3xl">My Projects</h2>
          <h3 className="text-[#4e4e4e] text-2xl">A collection of my work</h3>
        </div>

        <div className="flex gap-3 w-full flex-wrap  justify-between items-center">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
