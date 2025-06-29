import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="h-96 w-full" style={{ borderTop: ".1rem solid gray" }}>
      <div
        className="flex justify-around gap-5"
        style={{ padding: "2rem 3rem" }}
      >
        <div className="text-2xl">
          <ul className="flex flex-col gap-3 justify-center">
            <h2
              className="text-[#ffffff] text-[1.8rem]"
              style={{ marginBottom: "1rem" }}
            >
              Links
            </h2>
            <li className="text-[#bbbbbb] hover:text-[#ffffff]">
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li className="text-[#bbbbbb] hover:text-[#ffffff]">
              <Link to="/about">About</Link>
            </li>
            <li className="text-[#bbbbbb] hover:text-[#ffffff]">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="text-[#bbbbbb] hover:text-[#ffffff]">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="text-[#bbbbbb] hover:text-[#ffffff]">
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>

        <div className="text-2xl ">
          <ul className="flex flex-col gap-3 justify-center">
            <h2
              className="text-[#ffffff] text-[1.8rem]"
              style={{ marginBottom: "1rem" }}
            >
              Socials
            </h2>
            <li className="text-[#bbbbbb] hover:text-[#ffffff]">
              <img
                src="/assets/icons/github-30.png"
                className="h-8 w-8 inline bg-white rounded-full "
                alt="github"
              />{" "}
              Github
            </li>
            <li className="text-[#bbbbbb] hover:text-[#ffffff]">
              <img
                src="/assets/icons/x-50.png"
                className="h-8 w-8 inline  bg-white rounded-full"
                style={{ padding: ".1rem" }}
                alt="twiiter"
              />{" "}
              Twitter (X)
            </li>
            <li className="text-[#bbbbbb] hover:text-[#ffffff]">
              <img
                src="/assets/icons/instagram-48.png"
                className="h-8 w-8 inline  bg-white rounded-full "
                alt="instagram"
              />{" "}
              Instagram
            </li>
            <li className="text-[#bbbbbb] hover:text-[#ffffff]">
              <img
                src="/assets/icons/linkedin-48.png"
                style={{ padding: ".1rem" }}
                className="h-8 w-8 inline  bg-white rounded-full "
                alt="linkedin"
              />{" "}
              Linkedin
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
