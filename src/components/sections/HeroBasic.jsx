import { Link } from "react-router-dom";
import BlurText from "../../blocks/TextAnimations/BlurText/BlurText";

const HeroBasic = () => {
  return (
    <>
      <section className=" bg-[#232323] h-[45rem] w-full flex items-center justify-center">
        <div className="flex items-center flex-col justify-center gap-5 ">
          <div className="flex items-center gap-3 justify-center">
            <h2 className=" text-7xl text-[#4e4e4e] text-center">Welcome to</h2>
            <BlurText
              text="codewithdp"
              delay={200}
              animateBy="words"
              stepDuration={0.5}
              direction="top"
              className="text-7xl text-[#ffffff] text-center inline-block"
            />
          </div>
          <p className=" text-2xl text-[#bfbfbf] text-center w-1/2 ">
            I'm Darshan, a passionate full-stack web developer crafting clean,
            scalable, and user-friendly digital experiences using the MERN
            stack.
          </p>
          <Link
            style={{ padding: "1rem 1rem" }}
            className="bg-[#ffffff] rounded-xl text-[#232323] hover:bg-[#444444] hover:text-[#ffffff]"
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
