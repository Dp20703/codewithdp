import AnimatedContent from "../../blocks/Animations/AnimatedContent/AnimatedContent";
import InputField from "../formCompo/InputField.jsx";
import LabelField from "../formCompo/LabelField.jsx";

const ContactSection = () => {
  return (
    <section
      id="contact-sec"
      className="w-full lg:h-screen md:h-fit sm:h-fit
         flex lg:flex-row md:flex-col sm:flex-col justify-between items-center gap-5 p-[4rem] dark:bg-[#1e1e1e] bg-[#ffffff]"
    >
      <div
        id="contact-text"
        className="lg:w-1/2 md:w-full sm:w-full lg:h-[45rem] md:h-full sm:h-full"
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
          <div className="w-full h-full flex flex-col items-left rounded-xl px-8 py-8">
            <div className="w-full">
              <h2
                className="dark:text-[#ffffff] text-[#1e1e1e] 
                lg:text-[2rem] md:text-[1.5rem] sm:text-xl font-bold text-left py-0 px-[2rem]"
              >
                Contact Us
              </h2>
            </div>

            <div
              className="dark:text-[#eaeaea] text-[#383838]
              px-[2rem] py-[2rem] text-start lg:lg:text-[1.1rem] md:text-[1rem] sm:text-[.80rem] lg:w-4/5 flex flex-col gap-5"
            >
              <p>
                We are available for questions, feedback, or collaboration
                opportunities. Let us know how we can help!
              </p>
              <p>
                You can also contact us at{" "}
                <span className="dark:text-white text-black">
                  codewithdp2073@gmail.com
                </span>
              </p>
            </div>

            <div className="py-[2rem] px-[2rem]">
              <img
                src="/assets/images/contact2.jpg"
                alt="contact"
                className="h-76 w-2/3 rounded-xl  object-cover object-right"
              />
            </div>
          </div>
        </AnimatedContent>
      </div>

      <div
        id="contact-form"
        className="lg:w-1/3 md:w-full sm:w-full lg:h-[45rem]"
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
            className="dark:bg-[#232323] bg-[#eaeaea] 
            lg:w-full  md:w-full sm:w-full rounded-xl border border-gray-500 p-[2rem]"
          >
            <div className="w-full my-[.5rem]">
              <LabelField htmlFor="name" labelName="Name" />
              <InputField
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="w-full my-[.5rem]">
              <LabelField htmlFor="email" labelName="Email" />
              <InputField type="email" name="email" placeholder="Email" />
            </div>
            <div className="w-full my-[.5rem]">
              <LabelField htmlFor="phoneno" labelName="Phone number" />
              <InputField
                type="number"
                name="phoneno"
                id="phoneno"
                placeholder="Enter phone number"
              />
            </div>
            <div className="w-full my-[.5rem]">
              <LabelField htmlFor="subject" labelName="Subject" />
              <InputField
                type="text"
                name="subject"
                placeholder="Enter subject"
              />
            </div>
            <div className="w-full my-[.5rem]">
              <LabelField htmlFor="message" labelName="Message" />
              <textarea
                name="message"
                id="message"
                className="dark:text-[#ffffff] dark:bg-[#232323] dark:placeholder:text-[#bfbfbf]
                text-[#232323] bg-[#ffffff] placeholder:text-[#232323]
                w-full lg:text-[1rem] md:text-[.80rem] sm:text-[.70rem] rounded py-[0.5rem] px-[0.8rem] my-[0.5rem] border border-gray-500"
                placeholder="Type your message here."
                cols={2}
              />
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="dark:text-[#444444] dark:bg-[#eaeaea]  dark:hover:bg-[#ffffff]
                    text-[#eaeaea] bg-[#444444]  hover:bg-[#1e1e1e] outline-none
                 w-full rounded lg:text-[1.1rem] md:text-[1rem] sm:text-[.80rem] py-[0.5rem] px-[0.8rem] my-[0.5rem]"
              >
                Send Message
              </button>
            </div>
            <input
              type="hidden"
              name="_next"
              value="https://codewithdp.vercel.app/"
            />
          </form>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default ContactSection;
