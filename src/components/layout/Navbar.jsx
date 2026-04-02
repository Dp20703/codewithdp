import { Link, useLocation } from "react-router-dom";
import "../../styles/Navbar.css";
import { useTheme } from "../../context/ThemeContext.jsx.jsx";
const Navbar = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const openSideBar = () => {
    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbarMenu = document.querySelector(".navbar-menu");
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
  };

  console.log(theme);
  return (
    <>
      <nav className={`navbar ${theme === "light" && "bg-[#ffffff]"}`}>
        <div className="navbar-container">
          <Link
            to="/"
            className={`navbar-logo  ${theme === "light" && "text-[#1e1e1e]"}`}
          >
            codewithdp
          </Link>
          <button className="navbar-toggle" onClick={openSideBar}>
            <span
              className={`bar ${
                theme === "dark" ? "bg-[#ffffff]" : "bg-[#232323]"
              }`}
            ></span>
            <span
              className={`bar ${
                theme === "dark" ? "bg-[#ffffff]" : "bg-[#232323]"
              }`}
            ></span>
            <span
              className={`bar ${
                theme === "dark" ? "bg-[#ffffff]" : "bg-[#232323]"
              }`}
            ></span>
          </button>

          <ul className="navbar-menu">
            <li>
              <Link
                to="/"
                className={`${location.pathname === "/" && "active"}  ${
                  theme === "dark"
                    ? "text-[#ffffff] bg-transparent  hover:bg-[#444444] hover:text-[#eaeaea]"
                    : "text-[#1e1e1e] bg-transparent hover:bg-[#eaeaea] hover:text-[#232323]"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${location.pathname === "/about" && "active"}  ${
                  theme === "dark"
                    ? "text-[#ffffff] bg-transprent  hover:bg-[#444444] hover:text-[#eaeaea]"
                    : "text-[#1e1e1e] bg-transprent hover:bg-[#eaeaea] hover:text-[#232323]"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`${location.pathname === "/projects" && "active"}  ${
                  theme === "dark"
                    ? "text-[#ffffff] bg-transprent hover:bg-[#444444] hover:text-[#eaeaea]"
                    : "text-[#1e1e1e] bg-transprent hover:bg-[#eaeaea] hover:text-[#232323]"
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${location.pathname === "/contact" && "active"}  ${
                  theme === "dark"
                    ? "text-[#ffffff] bg-transprent  hover:bg-[#444444] hover:text-[#eaeaea]"
                    : "text-[#1e1e1e] bg-transprent hover:bg-[#eaeaea] hover:text-[#232323]"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="/assets/resume.pdf"
                download="Darshan_Prajapati_Resume.pdf"
                className={`${location.pathname === "/resume" && "active"}  ${
                  theme === "dark"
                    ? "text-[#ffffff] bg-transprent  hover:bg-[#444444] hover:text-[#eaeaea]"
                    : "text-[#1e1e1e] bg-transprent hover:bg-[#eaeaea] hover:text-[#232323]"
                }`}
              >
                Resume
              </a>
            </li>
            <li>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme == "light" ? (
                  <i
                    className="ri-sun-fill 
                      text-[#1e1e1e] bg-transprent hover:bg-[#eaeaea]
                      p-[0.5rem] border border-gray-500 rounded-[0.5rem] text-[1.5rem] transition-all duration-[700ms] ease-out"
                  />
                ) : (
                  <i className="ri-moon-fill text-[#ffffff] bg-transprent  hover:bg-[#444444] p-[0.5rem] border-[1.6px] border-gray-500 rounded-[0.5rem] text-[1.5rem] transition-all duration-[700ms] ease-out" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
