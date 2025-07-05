import AnimatedContent from "../../blocks/Animations/AnimatedContent/AnimatedContent";
import { useTheme } from "../../context/ThemeContext.jsx";

const ContactSection = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full h-screen sm:h-fit flex lg:flex-row md:flex-col  sm:flex-col items-cente justify-between ${
        theme === "dark" ? "bg-[#1e1e1e]" : "bg-[#ffffff]"
      }`}
      style={{ padding: "6rem 2rem" }}
    >
      <div className="lg:w-1/2 md:w-full sm:w-full ">
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
            className="lg:w-full md:w-full sm:w-full flex flex-col justify-center items-left"
            style={{ padding: "0 2rem" }}
          >
            <div>
              <h2
                className={`${
                  theme === "dark" ? "text-[#ffffff]" : "text-[#1e1e1e]"
                } lg:text-3xl md:text-2xl sm:text-xl font-bold`}
                style={{ padding: "0 2rem", textAlign: "start" }}
              >
                Contact Us
              </h2>
            </div>
            <div
              style={{ padding: "2rem 2rem" }}
              className={`${
                theme === "dark" ? "text-[#eaeaea]" : "text-[#383838]"
              } text-start lg:lg:text-[1.1rem] md:text-[1rem] sm:text-[.80rem] w-4/5 flex flex-col gap-5`}
            >
              <p>
                We are available for questions, feedback, or collaboration
                opportunities. Let us know how we can help!
              </p>
              <p>
                You can also contact us at{" "}
                <span
                  className={`${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  codewithdp2073@gmail.com
                </span>
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
        </AnimatedContent>
      </div>

      <div
        className="lg:w-1/2 md:w-full sm:w-full"
        style={{ padding: "0 4rem" }}
      >
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.5}
          ease="power.out"
          initialOpacity={0.5}
          animateOpacity
          scale={1}
          threshold={0.3}
          delay={0.5}
        >
          <form
            action="https://formsubmit.co/codewithdp2073@gmail.com"
            method="POST"
            className={`${
              theme === "dark" ? "bg-[#232323]" : "bg-[#eaeaea]"
            } lg:w-full  md:w-full sm:w-full rounded-xl`}
            style={{ border: ".1rem solid gray", padding: "2rem 2rem" }}
          >
            <div className="w-full" style={{ margin: ".5rem 0" }}>
              <label
                htmlFor="name"
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } w-full lg:text-[1.1rem] md:text-[1rem] sm:text-[.80rem]`}
              >
                Name
              </label>
              <input
                className={`${
                  theme === "dark"
                    ? "text-[#ffffff] bg-[#232323] placeholder:text-[#bfbfbf]"
                    : "text-[#232323] bg-[#ffffff] placeholder:text-[#232323]"
                } w-full lg:text-[1rem] md:text-[.80rem] sm:text-[.70rem] rounded`}
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
              <label
                htmlFor="email"
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } w-full lg:text-[1.1rem] md:text-[1rem] sm:text-[.80rem]`}
              >
                Email
              </label>
              <input
                className={`${
                  theme === "dark"
                    ? "text-[#ffffff] bg-[#232323] placeholder:text-[#bfbfbf]"
                    : "text-[#232323] bg-[#ffffff] placeholder:text-[#232323]"
                } w-full lg:text-[1rem] md:text-[.80rem] sm:text-[.70rem] rounded`}
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
              <label
                htmlFor="phoneno"
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } w-full lg:text-[1.1rem] md:text-[1rem] sm:text-[.80rem]`}
              >
                Phone number
              </label>
              <input
                min={0}
                className={`${
                  theme === "dark"
                    ? "text-[#ffffff] bg-[#232323] placeholder:text-[#bfbfbf]"
                    : "text-[#232323] bg-[#ffffff] placeholder:text-[#232323]"
                } w-full lg:text-[1rem] md:text-[.80rem] sm:text-[.70rem] rounded`}
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
              <label
                htmlFor="subject"
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } w-full lg:text-[1.1rem] md:text-[1rem] sm:text-[.80rem]`}
              >
                Subject
              </label>
              <input
                className={`${
                  theme === "dark"
                    ? "text-[#ffffff] bg-[#232323] placeholder:text-[#bfbfbf]"
                    : "text-[#232323] bg-[#ffffff] placeholder:text-[#232323]"
                } w-full lg:text-[1rem] md:text-[.80rem] sm:text-[.70rem] rounded`}
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
              <label
                htmlFor="message"
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } w-full lg:text-[1.1rem] md:text-[1rem] sm:text-[.80rem]`}
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className={`${
                  theme === "dark"
                    ? "text-[#ffffff] bg-[#232323] placeholder:text-[#bfbfbf]"
                    : "text-[#232323] bg-[#ffffff] placeholder:text-[#232323]"
                } w-full lg:text-[1rem] md:text-[.80rem] sm:text-[.70rem] rounded`}
                style={{
                  padding: ".5rem .8rem",
                  margin: ".5rem 0",
                  border: ".1rem solid gray",
                }}
                placeholder="Type your message here."
                cols={2}
              />
            </div>
            <div className="w-full" style={{ margin: "1rem 0" }}>
              <button
                type="submit"
                className={`${
                  theme === "dark"
                    ? "text-[#444444] bg-[#eaeaea]  hover:bg-[#ffffff]"
                    : "text-[#eaeaea] bg-[#444444]  hover:bg-[#1e1e1e]"
                } w-full rounded lg:text-[1.1rem] md:text-[1rem] sm:text-[.80rem] `}
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
        </AnimatedContent>
      </div>
    </section>
  );
};

export default ContactSection;
