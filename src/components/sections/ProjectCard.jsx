const ProjectCard = () => {
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
      live: "",
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
            <div
              key={idx}
              className="h-[38rem] w-[28rem] overflow-hidden flex flex-col  gap-8 bg-[#232323]  rounded-xl"
              style={{ padding: "2rem 2rem", border: ".1rem solid gray" }}
            >
              <div
                className="bg-[#e2e2e2] h-56 w-52 rounded-2xl overflow-hidden"
                style={{ border: ".1rem solid gray" }}
              >
                <img
                  src={project.imgURL}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="h-1/2 w-full flex flex-col gap-5 justify-center">
                <div className="flex justify-between items-center">
                  <h2 className="text-[#ffffff] text-2xl">{project.title}</h2>
                  <div className="flex items-center justify-around w-1/4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/icons/github-30.png"
                        className="h-8 w-8
                    inline bg-white rounded-full "
                        alt="github"
                      />{" "}
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span
                        className="bg-[#444444] hover:bg-[#232323] rounded-full text-xl "
                        style={{
                          padding: ".2rem .6rem",
                          border: ".1rem solid white",
                        }}
                      >
                        <i className="ri-arrow-right-up-long-line text-2xl " />
                      </span>
                    </a>
                  </div>
                </div>
                <p className="text-[#bfbfbf] text-xl">{project.description}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ProjectCard;
