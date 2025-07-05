import GlareHover from "../../blocks/Animations/GlareHover/GlareHover";
import AnimatedContent from "../../blocks/Animations/AnimatedContent/AnimatedContent";
import { useTheme } from "../../context/ThemeContext.jsx";
const ProjectCard = () => {
  const { theme } = useTheme();
  const projects = [
    {
      title: "StockTally",
      description:
        " StockTally is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) that allows users to track and manage their stock trades. Users can add buy/sell entries, close trades, and automatically calculate profits or losses.",
      imgURL: " /assets/images/StockTally.png",
      live: "https://stock-tally.vercel.app",
      github: "https://github.com/Dp20703/StockTally",
    },
    {
      title: "iNotebook",
      description:
        "iNotebook is a secure and user-friendly full-stack notes app that allows users to register, log in, and manage personal notes from anywhere. Built with React, Node.js, Express, and MongoDB, it features JWT-based authentication and a responsive UI for seamless note organization and editing.",
      imgURL: " /assets/images/inotebook.jpg",
      live: "https://inotebook-eta-one.vercel.app",
      github: "https://github.com/Dp20703/iNotebook",
    },
    {
      title: "Property-Renting",
      description:
        "Property Rental Web App – MERN Stack A full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to search, list, and manage rental properties. The platform provides a seamless experience for both property owners and renters.",
      imgURL: " /assets/images/property-renting.png",
      live: "https://renting-property-user.vercel.app/",
      github: "https://github.com/Dp20703/Property-Renting",
    },
    {
      title: "NewsMonkey",
      description:
        "NewsMonkey is a dynamic news web application built using the MERN stack. It fetches the latest news from a third-party API and displays categorized updates (e.g., business, sports, entertainment, technology, etc.) with support for Indian and international news.",
      imgURL: " /assets/images/newsmonkey.png",
      live: "https://news-monkey-rho.vercel.app/",
      github: "https://github.com/Dp20703/NewsMonkey",
    },
    {
      title: "Uber",
      description:
        "A frontend clone of the Uber ride booking interface built using React.js. It replicates key UI elements such as pickup/dropoff input fields, ride selection options, and estimated fare display. The project emphasizes clean design, intuitive layout, and real-time user interactions to simulate the Uber user experience.",
      imgURL: " /assets/images/uber.jpg",
      live: "https://github.com/Dp20703/Uber",
      github: "https://github.com/Dp20703/Uber",
    },
    {
      title: "Employee Management System",
      description:
        "Employee Management System with Admin & Employee Dashboards – Task assignment, tracking, and status updates built with MERN stack & Tailwind CSS.",
      imgURL: " /assets/images/ems.png",
      live: "https://ems-orcin.vercel.app/",
      github: "http://github.com/Dp20703/ems",
    },
  ];
  return (
    <>
      {projects.map((project, idx) => {
        return (
          <>
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              duration={1.3}
              ease="power.out"
              initialOpacity={0.5}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.3}
            >
              <div
                key={idx}
                className={`${
                  theme === "dark" ? "bg-[#232323]" : "bg-[#eaeaea]"
                } lg:h-[38rem] lg:w-[27rem] sm:h-[30rem] sm:w-[17rem] md:h-[36rem] md:w-[22rem] overflow-hidden flex flex-col  gap-8   rounded-xl `}
                style={{ padding: "2rem 2rem", border: ".1rem solid gray" }}
              >
                <div className="h-1/2 w-full ">
                  <div
                    className="lg:h-54 lg:w-52  md:h-48 md:w-46 sm:h-32 sm:w-32 rounded-2xl overflow-hidden"
                    style={{ padding: ".2rem .2rem" }}
                  >
                    <GlareHover
                      height="100%"
                      width="100%"
                      glareColor="#ffffff"
                      glareOpacity={0.3}
                      glareAngle={-30}
                      glareSize={300}
                      transitionDuration={800}
                      playOnce={false}
                    >
                      <img
                        src={project.imgURL}
                        alt={project.title}
                        className="object-cover h-full w-full object-center"
                      />
                    </GlareHover>
                  </div>
                </div>

                <div className="h-1/2 w-full flex flex-col gap-5 justify-center">
                  <div className="flex justify-between items-center w-full flex-wrap">
                    <h2
                      className={`${
                        theme === "dark" ? "text-[#eaeaea]" : "text-[#232323]"
                      } lg:text-2xl md:text-xl sm:text-[1rem] w-1/2 `}
                    >
                      {project.title}
                    </h2>
                    <div className="flex items-center justify-end gap-2 w-1/2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/assets/icons/github-30.png"
                          className={`${
                            theme === "dark" ? "bg-white" : "bg-transparent"
                          } lg:h-8 lg:w-8 md:h-7 md:w-7 sm:h-5 sm:w-5
                    inline rounded-full hover:scale-120 `}
                          alt="github"
                        />{" "}
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span
                          className={`${
                            theme === "dark"
                              ? "text-[#ffffff] bg-[#232323]  hover:bg-[#444444] hover:text-[#eaeaea] border border-solid border-zinc-100"
                              : "text-[#1e1e1e] bg-[#eaeaea] hover:bg-[#bfbfbf] hover:text-[#232323] border border-solid border-zinc-600"
                          } rounded-full lg:text-xl md:text-[1rem] sm:text-[.7rem]`}
                          style={{
                            padding: ".1rem .6rem",
                          }}
                        >
                          <i className="ri-arrow-right-up-long-line lg:text-2xl md:text-xl sm:text-[.8rem]  " />
                        </span>
                      </a>
                    </div>
                  </div>
                  <p
                    className={`${
                      theme === "dark" ? "text-[#bfbfbf] " : "text-[#232323]"
                    } lg-text-[1.1rem] md:text-[1rem] sm:text-[.75rem] text-wrap`}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            </AnimatedContent>
          </>
        );
      })}
    </>
  );
};

export default ProjectCard;
