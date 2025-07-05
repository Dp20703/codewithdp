import { useTheme } from "../../context/ThemeContext.jsx";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const { theme } = useTheme();
  return (
    <section
      className={`${
        theme === "dark" ? "bg-[#1e1e1e]" : "bg-[#ffffff]"
      } h-fit w-full`}
      style={{ padding: "2rem 4rem 6rem 4rem" }}
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <div
          className="w-full flex flex-col gap-2"
          style={{ padding: "0 1rem" }}
        >
          <h2
            className={`${
              theme === "dark" ? "text-[#eaeaea]" : "text-[#232323]"
            } lg:text-3xl md:text-2xl sm:text-xl`}
          >
            My Projects
          </h2>
          <h3
            className={`${
              theme === "dark" ? "text-[#bfbfbf]" : "text-[#4e4e4e]"
            } lg:text-2xl md:text-xl sm:text-[.80rem]`}
          >
            A collection of my work
          </h3>
        </div>

        <div className="flex gap-10 w-full flex-wrap  lg:justify-around md:justify-around sm:justify-center items-center">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
