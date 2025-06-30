import { Link, useLocation } from "react-router-dom";
import "../../styles/Navbar.css";
const Navbar = () => {
  const openSideBar = () => {
    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbarMenu = document.querySelector(".navbar-menu");
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
  };
  const location = useLocation();
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            codewithdp
          </Link>
          <button className="navbar-toggle" onClick={openSideBar}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <ul className="navbar-menu">
            <li>
              <Link
                to="/"
                className={`${location.pathname === "/" && "active"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${location.pathname === "/about" && "active"}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`${location.pathname === "/projects" && "active"}`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${location.pathname === "/contact" && "active"}`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`${location.pathname === "/services" && "active"}`}
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
