import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import HeroBasic from "../components/sections/HeroBasic";
import ProjectSection from "../components/sections/ProjectSection";
import ContactSection from "../components/sections/ContactSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBasic />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
