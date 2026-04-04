import PixelTransition from "../../blocks/Animations/PixelTransition/PixelTransition";
import AnimatedContent from "../../blocks/Animations/AnimatedContent/AnimatedContent";

const AboutSection = () => {
  return (
    <section
      id="about-sec"
      className="dark:bg-[#1e1e1e] bg-[#ffffff]
      sm:h-fit flex lg:flex-row md:flex-row sm:flex-col
      gap-14 px-[8%] py-10"
    >
      <div
        id="about-pic"
        className="w-[40%] sm:w-full rounded-xl  border border-gray-500 overflow-hidden"
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
          <div>
            <PixelTransition
              firstContent={
                <img
                  src="https://plus.unsplash.com/premium_photo-1746927715759-03f68bbd8c9a?q=80&w=744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="contact"
                  className="lg:h-[100dvh] md:h-[40rem] object-cover md:object-center sm:object-right "
                />
              }
              gridSize={12}
              pixelColor="#D3DAD9"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </div>
        </AnimatedContent>
      </div>

      <div
        id="about-text"
        className="dark:bg-[#232323] bg-[#eaeaea] 
           lg:min-h-screen md:h-[40rem] sm:h-fit w-[60%] sm:w-full border border-gray-500 rounded-xl py-12 px-10 "
      >
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
          <div className="flex flex-col gap-14">
            <div className="w-full flex justify-around">
              <div>
                <h2
                  className="dark:text-[#ffffff] text-[#1e1e1e]
                  lg:text-[2rem] md:text-[1.5rem] sm:text-xl font-bold"
                >
                  About
                </h2>

                <h3
                  className="dark:text-[#444444] text-[#383838]
                  lg:text-xl md:text-[1rem] sm:text-[1rem]"
                >
                  Get to Know Me
                </h3>
              </div>

              <a
                href="/resume.pdf"
                download="Darshan_Prajapati_Resume.pdf"
                className="explore-btn dark:text-[#ffffff] dark:bg-[#1e1e1e]
                    bg-[#1e1e1e] text-[#ffff]                
                    inline-block  px-6 py-3 rounded-xl shadow-md hover:scale-105 transition h-fit border-gray-400 border-1"
              >
                ⬇ Download CV
              </a>
            </div>

            <div className="dark:text-[#bfbfbf] text-[#232323] w-full lg:text-[1.1rem] md:text-[.9rem] sm:text-[.75rem]">
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
