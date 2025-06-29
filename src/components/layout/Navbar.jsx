import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
const Navbar = () => {
  const openSideBar = () => {
    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbarMenu = document.querySelector(".navbar-menu");
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
  };

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
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
