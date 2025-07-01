import React from "react";

const AboutSection = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-1/2" style={{ padding: "2rem 6rem" }}>
        <img
          src="https://plus.unsplash.com/premium_photo-1746927715759-03f68bbd8c9a?q=80&w=744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="contact"
          className="h-[40rem] w-[40rem] rounded-xl  object-cover object-right"
        />
      </div>
      <div className="w-1/2" style={{ padding: "5rem 2rem" }}>
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
              subheading
            </h3>
          </div>
          <div className="w-full text-[#bfbfbf]">
            <p className="text-2xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio, laborum laudantium debitis repellat excepturi quaerat
              praesentium, libero necessitatibus provident autem quis voluptate
            </p>
            <br />
            <br />
            <p className="text-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates quis qui, libero vitae suscipit veritatis adipisci,
              earum nemo, error recusandae ratione quasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
