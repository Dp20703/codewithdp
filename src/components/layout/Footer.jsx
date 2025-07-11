import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext.jsx";
const Footer = () => {
  const { theme } = useTheme();
  return (
    <section id="footer-sec"
      className={`w-full ${
        theme === "dark" ? "bg-[#1e1e1e] " : "bg-[#ffffff]"
      }`}
      style={{ borderTop: ".1rem solid gray" }}
    >
      <div
        className="flex justify-around gap-5"
        style={{ padding: "2rem 3rem" }}
      >
        <div>
          <ul className="flex flex-col gap-3 justify-center">
            <h2
              className={`lg:text-[1.75rem] md:text-2xl sm:text-xl  ${
                theme === "dark"
                  ? "text-[#e1e1e1] bg-transparent  hover:text-[#ffffff]"
                  : "text-[#1e1e1e] bg-transparnt  hover:text-[#444444]"
              }`}
              style={{ marginBottom: ".5rem" }}
            >
              Links
            </h2>
            <li
              className={`${
                theme === "dark"
                  ? "text-[#bbbbbb] hover:text-[#ffffff]"
                  : "text-[#444444] hover:text-[#232323]"
              } lg:text-2xl md:text-xl sm:text-[.80rem] `}
            >
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li
              className={`${
                theme === "dark"
                  ? "text-[#bbbbbb] hover:text-[#ffffff]"
                  : "text-[#444444] hover:text-[#232323]"
              } lg:text-2xl md:text-xl sm:text-[.80rem] `}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={`${
                theme === "dark"
                  ? "text-[#bbbbbb] hover:text-[#ffffff]"
                  : "text-[#444444] hover:text-[#232323]"
              } lg:text-2xl md:text-xl sm:text-[.80rem] `}
            >
              <Link to="/projects">Projects</Link>
            </li>
            <li
              className={`${
                theme === "dark"
                  ? "text-[#bbbbbb] hover:text-[#ffffff]"
                  : "text-[#444444] hover:text-[#232323]"
              } lg:text-2xl md:text-xl sm:text-[.80rem] `}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-3 justify-center">
            <h2
              className={`lg:text-[1.75rem] md:text-2xl sm:text-xl  ${
                theme === "dark"
                  ? "text-[#e1e1e1] bg-transparent  hover:text-[#ffffff]"
                  : "text-[#1e1e1e] bg-transparnt  hover:text-[#444444]"
              }`}
              style={{ marginBottom: ".5rem" }}
            >
              Socials
            </h2>
            <li
              className={`${
                theme === "dark"
                  ? "text-[#bbbbbb] hover:text-[#ffffff]"
                  : "text-[#444444] hover:text-[#232323]"
              } lg:text-2xl md:text-xl sm:text-[.80rem] `}
            >
              <img
                src="/assets/icons/github-30.png"
                className="lg:h-8 lg:w-8 md:h-7 md:w-7 sm:h-5 sm:w-5 inline bg-white rounded-full "
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
            <li
              className={`${
                theme === "dark"
                  ? "text-[#bbbbbb] hover:text-[#ffffff]"
                  : "text-[#444444] hover:text-[#232323]"
              } lg:text-2xl md:text-xl sm:text-[.80rem] `}
            >
              <img
                src="/assets/icons/linkedin-48.png"
                style={{ padding: ".1rem" }}
                className="lg:h-8 lg:w-8 md:h-7 md:w-7 sm:h-5 sm:w-5 inline bg-white rounded-full "
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
            <li
              className={`${
                theme === "dark"
                  ? "text-[#bbbbbb] hover:text-[#ffffff]"
                  : "text-[#444444] hover:text-[#232323]"
              } lg:text-2xl md:text-xl sm:text-[.80rem] `}
            >
              <img
                src="/assets/icons/x-50.png"
                className="lg:h-8 lg:w-8 md:h-7 md:w-7 sm:h-5 sm:w-5 inline  bg-white rounded-full"
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
            <li
              className={`${
                theme === "dark"
                  ? "text-[#bbbbbb] hover:text-[#ffffff]"
                  : "text-[#444444] hover:text-[#232323]"
              } lg:text-2xl md:text-xl sm:text-[.80rem] `}
            >
              <img
                src="/assets/icons/instagram-48.png"
                className="lg:h-8 lg:w-8 md:h-7 md:w-7 sm:h-5 sm:w-5 inline  bg-white rounded-full "
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
      <h2
        className={`${
          theme === "dark" ? "text-[#ffffff]" : "text-[#1e1e1e]"
        } text-center lg:text-xl md:text-[1rem] sm:text-[.80rem]`}
        style={{ padding: "2rem 0" }}
      >
        Made with ❤️ in india
      </h2>
    </section>
  );
};

export default Footer;
