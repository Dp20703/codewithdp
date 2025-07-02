import React from "react";

const AboutSection = () => {
  return (
    <div
      className="h-screen w-full flex justify-center items-center"
      style={{ padding: "2rem 4rem" }}
    >
      <div className="w-1/2">
        <img
          src="https://plus.unsplash.com/premium_photo-1746927715759-03f68bbd8c9a?q=80&w=744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="contact"
          className="h-[40rem] w-[40rem] rounded-xl  object-cover object-right"
        />
      </div>
      <div className="w-1/2">
        <div
          style={{
            padding: "2rem 2rem",
            border: ".1rem solid gray",
          }}
          className=" h-[40rem] w-full rounded-xl"
        >
          <div className="w-full h-1/5">
            <h2 className="text-5xl text-[#ffffff] font-bold">About</h2>
            <h3
              className="text-xl text-[#444444] "
              style={{ margin: ".5rem 0" }}
            >
              Get to Know Me
            </h3>
          </div>
          <div className="w-full text-[#bfbfbf]">
            <p className="text-xl">
              I'm Darshan Prajapati, a dedicated MERN stack developer with a
              passion for crafting clean and functional web applications. Having
              recently completed my BCA, I’ve been constantly improving my
              skills by building real-world projects like StockTally and
              Property-Renting. I enjoy turning complex problems into smooth
              user experiences and love working across both frontend and backend
              technologies.
            </p>
            <br />
            <br />
            <p className="text-xl">
              Beyond just writing code, I'm deeply focused on learning modern
              tools, UI/UX best practices, and performance optimization. Whether
              it’s developing a full-stack project or designing layouts with
              TailwindCSS, I strive to build scalable and maintainable
              solutions. I’m also preparing for my MCA while actively exploring
              new opportunities to grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
