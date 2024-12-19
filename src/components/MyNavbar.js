import { useState, useEffect } from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import logo1 from "../assets/img/logo1.png";
import linkedin from "../assets/img/linkedin.png";
import github from "../assets/img/github.png";
import resume from "../assets/img/resume.png";

export const MyNavbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <BootstrapNavbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <BootstrapNavbar.Brand href="#home">
          <img
            src={logo1}
            alt="Logo"
            style={{ width: "65px", height: "65px" }}
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </BootstrapNavbar.Toggle>
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#connect"
              className={
                activeLink === "contacts" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contacts")}
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href={process.env.REACT_APP_LINKEDIN_URL}>
                <img src={linkedin} alt="LinkedIn" style={{ gap: "15px" }} />
              </a>
              <a href={process.env.REACT_APP_GITHUB_URL}>
                <img src={github} alt="GitHub" style={{ gap: "15px" }} />
              </a>
              <a href={process.env.REACT_APP_GOOGLE_DRIVE_URL}>
                <img src={resume} alt="Resume" style={{ gap: "15px" }} />
              </a>
            </div>
          </span>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
