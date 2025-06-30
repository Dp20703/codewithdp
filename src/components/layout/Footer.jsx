import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="w-full" style={{ borderTop: ".1rem solid gray" }}>
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
            {/* <li className="text-[#bbbbbb] hover:text-[#ffffff]">
              <Link to="/services">Services</Link>
            </li> */}
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
              <a
                href="https://github.com/dp20703"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="text-[#bbbbbb] hover:text-[#ffffff]">
              <img
                src="/assets/icons/linkedin-48.png"
                style={{ padding: ".1rem" }}
                className="h-8 w-8 inline  bg-white rounded-full "
                alt="linkedin"
              />{" "}
              <a
                href="https://www.linkedin.com/in/darshan-prajapati-523202282/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li className="text-[#bbbbbb] hover:text-[#ffffff]">
              <img
                src="/assets/icons/x-50.png"
                className="h-8 w-8 inline  bg-white rounded-full"
                style={{ padding: ".1rem" }}
                alt="twiiter"
              />{" "}
              <a
                href="https://www.twitter.com/darshanrp2073"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter (X)
              </a>
            </li>
            <li className="text-[#bbbbbb] hover:text-[#ffffff]">
              <img
                src="/assets/icons/instagram-48.png"
                className="h-8 w-8 inline  bg-white rounded-full "
                alt="instagram"
              />{" "}
              <a
                href="https://www.instagram.com/darshan_2073_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-center" style={{ padding: "2rem 0" }}>
        Made with ❤️ in india
      </h2>
    </section>
  );
};

export default Footer;
