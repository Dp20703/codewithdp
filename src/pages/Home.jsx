import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import HeroBasic from "../components/sections/HeroBasic";
import ProjectSection from "../components/sections/ProjectSection";
import ContactSection from "../components/sections/ContactSection";
import AboutSection from "../components/sections/AboutSection";

const Home = () => {
  document.title = "Home | codewithdp";
  return (
    <>
      <Navbar />
      <HeroBasic />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
