import { Link } from "react-router-dom";
import BlurText from "../../blocks/TextAnimations/BlurText/BlurText";
import { useTheme } from "../../context/ThemeContext.jsx.jsx";
import "../../styles/Responsive.css";

const HeroBasic = () => {
  const { theme } = useTheme();
  return (
    <>
      <section
        id="herobasic"
        className={`${
          theme === "dark" ? "bg-[#232323]" : "bg-[#eaeaea] "
        } h-screen w-full flex items-center justify-center`}
      >
        <div className="flex items-center flex-col justify-center gap-5 ">
          <div
            id="title"
            className="flex lg:flex-row md:flex-col sm:flex-col items-center gap-3 justify-center"
          >
            <h2 className=" lg:text-4xl md:text-3xl sm:text-xl text-[#4e4e4e] text-center">
              Welcome to
            </h2>
            <BlurText
              text="codewithdp"
              delay={200}
              animateBy="words"
              stepDuration={0.5}
              direction="top"
              className={`${
                theme === "dark" ? "text-[#ffffff]" : "text-[#1e1e1e]"
              } lg:text-5xl md:text-4xl sm:text-2xl text-center inline-block title-text`}
            />
          </div>

          <p
            id="hero-text"
            className={` lg:text-xl md:text-sm sm:text-xs ${
              theme === "dark" ? "text-[#bfbfbf]" : "text-[#444444]"
            }  text-center w-1/2 `}
          >
            I'm Darshan, a passionate full-stack web developer crafting clean,
            scalable, and user-friendly digital experiences using the MERN
            stack.
          </p>

          <div className="mt-8 flex flex-row justify-evenly items-center gap-5 w-fit px-8">
            <Link
              className={`explore-btn inline-block px-4 py-3 shadow-md hover:scale-105 transition 
              lg:text-xl md:text-sm sm:text-xs rounded-xl
            ${
              theme === "dark"
                ? "bg-[#ffffff] text-[#232323] hover:bg-[#444444] hover:text-[#ffffff]"
                : "text-[#ffffff] bg-[#232323] hover:text-[#444444] hover:bg-[#ffffff]"
            }  `}
              to={"/projects"}
            >
              Explore My Projects
            </Link>
            <a
              href="/assets/resume.pdf"
              download="Darshan_Prajapati_Resume.pdf"
              className={`explore-btn inline-block px-4 py-3 rounded-xl shadow-md hover:scale-105 transition  lg:text-xl md:text-sm sm:text-xs ${
                theme === "dark"
                  ? "bg-[#ffffff] text-[#232323] hover:bg-[#444444] hover:text-[#ffffff]"
                  : "text-[#ffffff] bg-[#232323] hover:text-[#444444] hover:bg-[#ffffff]"
              }  `}
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBasic;
