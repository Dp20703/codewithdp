import React from "react";

const ContactSection = () => {
  return (
    <section
      className="w-full h-screen flex items-center justify-between"
      style={{ margin: "5rem 0" }}
    >
      <div className="w-1/2" style={{ padding: "2rem 2rem" }}>
        <div className="w-full">
          <div>
            <h2
              className="text-4xl text-[#ffffff] font-bold"
              style={{ padding: "0 2rem" }}
            >
              Contact Us
            </h2>
          </div>
          <div
            style={{ padding: "2rem 2rem" }}
            className="text-xl w-4/5 flex flex-col gap-5 text-[#eaeaea] "
          >
            <p>
              We are available for questions, feedback, or collaboration
              opportunities. Let us know how we can help!
            </p>
            <p>
              You can also contact us at{" "}
              <span className="text-[#ffffff]">codewithdp@gmail.com</span>
            </p>
          </div>
          <div style={{ padding: "2rem 2rem" }}>
            <img
              src="/assets/images/contact2.jpg"
              alt="contact"
              className="h-76 w-2/3 rounded-xl  object-contain object-left-top"
            />
          </div>
        </div>
      </div>

      <div className="w-1/2" style={{ padding: "2rem 8rem" }}>
        <form
          action="https://formsubmit.co/codewithdp2073@gmail.com"
          method="POST"
          className="w-full rounded-xl"
          style={{ border: ".1rem solid gray", padding: "2rem 2rem" }}
        >
          <div className="w-full" style={{ margin: ".5rem 0" }}>
            <label htmlFor="name" className="text-white w-full text-xl">
              Name
            </label>
            <input
              className="w-full text-[#ffffff] bg-[#232323] rounded text-xl placeholder:text-[#bfbfbf]"
              style={{
                padding: ".5rem .8rem",
                margin: ".5rem 0",
                border: ".1rem solid gray",
              }}
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="w-full" style={{ margin: ".5rem 0" }}>
            <label htmlFor="email" className="text-white w-full text-xl">
              Email
            </label>
            <input
              className="w-full text-[#ffffff] bg-[#232323] rounded text-xl placeholder:text-[#bfbfbf]"
              style={{
                padding: ".5rem .8rem",
                margin: ".5rem 0",
                border: ".1rem solid gray",
              }}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="w-full" style={{ margin: ".5rem 0" }}>
            <label htmlFor="phoneno" className="text-white w-full text-xl">
              Phone number
            </label>
            <input
              min={0}
              className="w-full text-[#ffffff] bg-[#232323] rounded text-xl placeholder:text-[#bfbfbf]"
              style={{
                padding: ".5rem .8rem",
                margin: ".5rem 0",
                border: ".1rem solid gray",
              }}
              type="number"
              name="phoneno"
              id="phoneno"
              placeholder="Enter phone number"
            />
          </div>
          <div className="w-full" style={{ margin: ".5rem 0" }}>
            <label htmlFor="subject" className="text-white w-full text-xl">
              Subject
            </label>
            <input
              className="w-full text-[#ffffff] bg-[#232323] rounded text-xl placeholder:text-[#bfbfbf]"
              style={{
                padding: ".5rem .8rem",
                margin: ".5rem 0",
                border: ".1rem solid gray",
              }}
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
          </div>
          <div className="w-full" style={{ margin: ".5rem 0" }}>
            <label htmlFor="message" className="text-white w-full text-xl">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full text-[#ffffff] bg-[#232323] rounded text-xl placeholder:text-[#bfbfbf]"
              style={{
                padding: ".5rem .8rem",
                margin: ".5rem 0",
                border: ".1rem solid gray",
              }}
              placeholder="Type your message here."
              cols={2}
            />
          </div>
          <div className="w-full" style={{ margin: "2rem 0" }}>
            <button
              type="submit"
              className="w-full text-[#444444] bg-[#eaeaea] rounded text-xl hover:bg-[#ffffff]"
              style={{
                padding: ".5rem .8rem",
                margin: ".5rem 0",
              }}
            >
              Send Message
            </button>
          </div>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:5173/contact"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
