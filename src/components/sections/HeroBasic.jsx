import { Link } from "react-router-dom";
import BlurText from "../../blocks/TextAnimations/BlurText/BlurText";

const HeroBasic = () => {
  return (
    <>
      <section className=" bg-[#232323] h-screen w-full flex items-center justify-center">
        <div className="flex items-center flex-col justify-center gap-5 ">
          <div className="flex lg:flex-row md:flex-col sm:flex-col items-center gap-3 justify-center">
            <h2 className=" lg:text-6xl md:text-4xl sm:text-2xl text-[#4e4e4e] text-center">
              Welcome to
            </h2>
            <BlurText
              text="codewithdp"
              delay={200}
              animateBy="words"
              stepDuration={0.5}
              direction="top"
              className="lg:text-7xl md:text-5xl sm:text-3xl text-[#ffffff] text-center inline-block"
            />
          </div>
          <p className=" lg:text-2xl md:text-xl sm:text-sm text-[#bfbfbf] text-center w-1/2 ">
            I'm Darshan, a passionate full-stack web developer crafting clean,
            scalable, and user-friendly digital experiences using the MERN
            stack.
          </p>
          <Link
            style={{ padding: "1rem 1rem" }}
            className="bg-[#ffffff] lg:text-xl md:text-[1rem] sm:text-xs rounded-xl text-[#232323] hover:bg-[#444444] hover:text-[#ffffff]"
            to={"/projects"}
          >
            Explore My Projects
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroBasic;
