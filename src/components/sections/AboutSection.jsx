import PixelTransition from "../../blocks/Animations/PixelTransition/PixelTransition";
import AnimatedContent from "../../blocks/Animations/AnimatedContent/AnimatedContent";
import { useTheme } from "../../context/ThemeContext.jsx";

const AboutSection = () => {
  const { theme } = useTheme();
  return (
    <section
      id="about-sec"
      className={`${
        theme === "dark" ? "bg-[#1e1e1e]" : "bg-[#ffffff]"
      } lg:h-screen md:h-screen sm:h-fit
      flex lg:flex-row md:flex-row sm:flex-col gap-5 items-center`}
      style={{ padding: "4rem 4rem" }}
    >
      <div
        className="lg:w-1/2 md:w-1/2 sm:w-full h-full overflow-hidden"
        id="about-pic"
      >
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={1.5}
          ease="power.out"
          initialOpacity={0.5}
          animateOpacity
          scale={1}
          threshold={0.3}
          delay={0.5}
        >
          <div
            id="img-compo"
            className="lg:w-[32rem] md:w-full sm:w-full lg:h-[40rem] md:h-[40rem] sm:h-full rounded-xl"
          >
            <PixelTransition
              firstContent={
                <img
                  src="https://plus.unsplash.com/premium_photo-1746927715759-03f68bbd8c9a?q=80&w=744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="contact"
                  className="rounded-xl md:h-[40rem] h-full w-full object-cover md:object-center object-right "
                />
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </div>
        </AnimatedContent>
      </div>

      <div id="about-text" className="lg:w-1/2 md:w-1/2 sm:w-full h-full">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.8}
          ease="power.out"
          initialOpacity={0.5}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.5}
        >
          <div
            className={`${
              theme === "dark" ? "bg-[#232323]" : "bg-[#eaeaea]"
            } lg:h-[40rem] md:h-[40rem] sm:h-full  lg:w-[40rem] md:w-full sm:w-full rounded-xl  `}
            style={{
              padding: "2rem 2rem",
              border: ".1rem solid gray",
            }}
          >
            <div className="w-full h-1/5">
              <h2
                className={`${
                  theme === "dark" ? "text-[#ffffff]" : "text-[#1e1e1e]"
                } lg:text-[2rem] md:text-[1.5rem] sm:text-xl font-bold`}
              >
                About
              </h2>
              <h3
                className={`${
                  theme === "dark" ? "text-[#444444]" : "text-[#383838]"
                } lg:text-xl md:text-[1rem] sm:text-[1rem]`}
                style={{ margin: ".5rem 0" }}
              >
                Get to Know Me
              </h3>
            </div>
            <div
              className={`${
                theme === "dark" ? "text-[#bfbfbf]" : "text-[#232323]"
              } w-full lg:text-[1.1rem] md:text-[.9rem] sm:text-[.75rem]`}
            >
              <p>
                I'm Darshan Prajapati, a dedicated MERN stack developer with a
                passion for crafting clean and functional web applications.
                Having recently completed my BCA, I’ve been constantly improving
                my skills by building real-world projects like StockTally and
                Property-Renting. I enjoy turning complex problems into smooth
                user experiences and love working across both frontend and
                backend technologies.
              </p>
              <br />
              <br />
              <p>
                Beyond just writing code, I'm deeply focused on learning modern
                tools, UI/UX best practices, and performance optimization.
                Whether it’s developing a full-stack project or designing
                layouts with TailwindCSS, I strive to build scalable and
                maintainable solutions. I’m also preparing for my MCA while
                actively exploring new opportunities to grow as a developer.
              </p>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default AboutSection;
