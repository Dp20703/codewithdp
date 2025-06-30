import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import HeroBasic from "../components/sections/HeroBasic";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBasic />
      <Projects />
      <Contact/>
      <Footer />
    </>
  );
};

export default Home;
