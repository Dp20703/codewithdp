import { Link } from "react-router-dom";

const Footer = () => {
  const linkCSS = `dark:text-[#bbbbbb] dark:hover:text-[#ffffff]
                    text-[#444444] hover:text-[#232323]
                    lg:text-xl md:text-[1rem] sm:text-[.80rem]`;

  const imgCSS = `lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-4 sm:w-4 inline bg-white rounded-full`;

  return (
    <footer className="dark:bg-[#1e1e1e] bg-[#ffffff] border-t border-gray-500">
      <section className="flex justify-around gap-5 py-6 px-6">
        <nav>
          <ul className="flex flex-col gap-3 sm:gap-1 justify-center">
            <li className="lg:text-[1.5rem] md:text-[1.2rem] sm:text-[1rem] text-[#1e1e1e] bg-transparnt hover:text-[#444444] dark:text-[#e1e1e1] dark:bg-transparent dark:hover:text-[#ffffff]">
              Links
            </li>

            <li>
              <Link to="/" className={`${linkCSS}`}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className={`${linkCSS}`}>
                About
              </Link>
            </li>

            <li>
              <Link to="/projects" className={`${linkCSS}`}>
                Projects
              </Link>
            </li>

            <li>
              <Link to="/contact" className={`${linkCSS}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <section>
          <ul className="flex flex-col gap-3 sm:gap-2 justify-center">
            <li className="lg:text-[1.5rem] md:text-[1.2rem] sm:text-[1rem] text-[#1e1e1e] bg-transparnt hover:text-[#444444] dark:text-[#e1e1e1] dark:bg-transparent dark:hover:text-[#ffffff]">
              Socials
            </li>

            <li className={`${linkCSS}`}>
              <img
                src="/assets/icons/github-30.png"
                className={`${imgCSS}`}
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

            <li className={`${linkCSS}`}>
              <img
                src="/assets/icons/linkedin-48.png"
                className={`p-[.1rem] ${imgCSS}`}
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

            <li className={`${linkCSS}`}>
              <img
                src="/assets/icons/x-50.png"
                className={`${imgCSS} p-[.1rem]`}
                alt="twitter"
              />{" "}
              <a
                href="https://www.twitter.com/darshanrp2073"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter (X)
              </a>
            </li>

            <li className={`${linkCSS}`}>
              <img
                src="/assets/icons/instagram-48.png"
                className={`${imgCSS}`}
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
        </section>
      </section>

      <h2 className="dark:text-[#ffffff] text-[#1e1e1e] text-center lg:text-[1rem] md:text-[.8rem] sm:text-[.6rem] pb-6">
        Made with ❤️ in India
      </h2>
    </footer>
  );
};

export default Footer;
