import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import AboutSection from "../components/sections/AboutSection";

const About = () => {
    document.title = "About | codewithdp";
  return (
    <>
      <Navbar />
      <AboutSection />
      <Footer />
    </>
  );
};

export default About;
