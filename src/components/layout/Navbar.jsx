import { Link, useLocation } from "react-router-dom";
import "../../styles/Navbar.css";
import { useTheme } from "../../context/ThemeContext.jsx";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = `
    text-[#1e1e1e] bg-transparent hover:bg-[#eaeaea] hover:text-[#232323]
    dark:text-white dark:hover:bg-[#444444] dark:hover:text-[#eaeaea]
    px-[.5rem] py-[.5rem] rounded transition-all duration-300
  `;

  return (
    <nav
      className="navbar
      sticky top-0 z-[999] flex justify-center items-center
      bg-white text-[#1e1e1e] shadow-md
      dark:bg-[#1e1e1e] dark:text-white dark:shadow-lg
    "
    >
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo cursor-pointer font-semibold dark:text-[#ffffff] text-[#1e1e1e]"
        >
          codewithdp
        </Link>
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar dark:bg-[#ffffff] bg-[#232323]"></span>
          <span className="bar dark:bg-[#ffffff] bg-[#232323]"></span>
          <span className="bar dark:bg-[#ffffff] bg-[#232323]"></span>
        </button>

        <ul className={` navbar-menu ${isOpen ? "active" : ""} `}>
          <li>
            <Link
              to="/"
              className={`${location.pathname === "/" && "active"} ${linkClass}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${location.pathname === "/about" && "active"}
                  ${linkClass}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`${location.pathname === "/projects" && "active"} 
                          ${linkClass}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${location.pathname === "/contact" && "active"}  
                     ${linkClass}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="/assets/resume.pdf"
              download="Darshan_Prajapati_Resume.pdf"
              className={`${location.pathname === "/resume" && "active"}  
                 ${linkClass}`}
            >
              Resume
            </a>
          </li>
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="
              px-[.4rem] py-[.2rem] border border-gray-500 rounded-lg text-2xl
              transition-all duration-300 outline-none
              hover:bg-[#eaeaea] dark:hover:bg-[#444444]
            "
            >
              {theme === "light" ? (
                <i className="ri-sun-fill text-[#1e1e1e]" />
              ) : (
                <i className="ri-moon-fill text-white" />
              )}
            </button>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};
export default Navbar;
