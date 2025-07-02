import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import ProjectSection from "../components/sections/ProjectSection";

const Projects = () => {
    document.title = "Projects | codewithdp";
  return (
    <>
      <Navbar />
      <ProjectSection />
      <Footer/>
    </>
  );
};

export default Projects;
