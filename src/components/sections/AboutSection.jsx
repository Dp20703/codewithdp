import PixelTransition from "../../blocks/Animations/PixelTransition/PixelTransition";
import AnimatedContent from "../../blocks/Animations/AnimatedContent/AnimatedContent";

const AboutSection = () => {
  return (
    <div
      className="h-screen sm:h-fit w-full flex lg:flex-row md:flex-row sm:flex-col gap-8 justify-center items-center"
      style={{ padding: "2rem 4rem" }}
    >
      <div className="lg:w-1/2 md:w-full sm:w-full">
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
          <div className="lg:w-[35rem] md:w-100 sm:[w-25rem]">
            <PixelTransition
              firstContent={
                <img
                  src="https://plus.unsplash.com/premium_photo-1746927715759-03f68bbd8c9a?q=80&w=744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="contact"
                  className=" rounded-xl h-[40rem] w-full object-cover object-right"
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
      <div className="lg:w-1/2 md:w-full sm:w-full">
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
            style={{
              padding: "2rem 2rem",
              border: ".1rem solid gray",
            }}
            className=" lg:h-[40rem] sm:h-fit md:h-[40rem] w-full rounded-xl overflow-auto"
          >
            <div className="w-full h-1/5">
              <h2 className="lg:text-[2rem] md:text-[1.5rem] sm:text-xl text-[#ffffff] font-bold">
                About
              </h2>
              <h3
                className="lg:text-xl md:text-[1rem] sm:text-[1rem] text-[#444444] "
                style={{ margin: ".5rem 0" }}
              >
                Get to Know Me
              </h3>
            </div>
            <div className="w-full text-[#bfbfbf] lg:text-[1.1rem] md:text-[1rem] sm:text-[.80rem]">
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
    </div>
  );
};

export default AboutSection;
