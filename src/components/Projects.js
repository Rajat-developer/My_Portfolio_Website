import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import taskproject from "../assets/img/taskproject.png";
import food from "../assets/img/food.png";
import rbac from "../assets/img/rbac.png";
export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Task Manager Website",
      description: `A dynamic and interactive task management system built using the MERN stack. It allows users to create, edit, and manage tasks with the following features:
        - Drag-and-Drop Interface: Seamlessly move tasks between "Open", "In-Progress" and "Completed" columns to update their status in real time.
        - RESTful API Integration: Ensures smooth communication between the frontend and backend for task creation, updates, and status management.
        - Responsive Design: Optimized for various devices, providing an intuitive user experience.`,
      imgUrl: taskproject,
    },
    {
      id: 2,
      title: "Food Restaurant Website",
      description: `Created a fully functional food restaurant website using the MERN Stack. Key features include:
        - User Authentication: Secure login and registration.
        - Menu Management: Dynamic display of food categories and items.
        - Order Functionality: Add to cart, place orders, and track order history.
        - Responsive Design: Ensures a seamless experience across devices.`,
      imgUrl: food,
    },
    {
      id: 3,
      title: "Role-Based Access Control System",
      description: `This project implements a secure and scalable Role-Based Access Control system using Node.js, designed to manage user roles and permissions effectively. Key features include:
        - Authentication & Authorization: Integrated JWT (JSON Web Tokens) for secure user authentication and role-based authorization.
        - Password Security: Utilized bcrypt to hash user passwords, ensuring enhanced security against data breaches.
        - API Development: Created RESTful APIs for managing user accounts, assigning roles, and enforcing access control policies.`,
      imgUrl: rbac,
    },
  ];

  const toggleProjectDescription = (id) => {
    setActiveProject((prev) => (prev === id ? null : id));
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p style={{ fontSize: "18px", width: "56%" }}>
              Explore some of the projects I have worked on. These projects
              showcase my skills in building dynamic, responsive, and secure web
              applications using various technologies.
            </p>
            <Row>
              {projects.map((project) => (
                <Col key={project.id} md={4} sm={6} className="project-col">
                  <div className="proj-imgbx">
                    <img src={project.imgUrl} alt={project.title} />
                  </div>
                  <div>
                    <h4
                      className="project-title"
                      onClick={() => toggleProjectDescription(project.id)}
                    >
                      {project.title}
                    </h4>
                  </div>
                  {activeProject === project.id && (
                    <div className="proj-description">
                      <p
                        className="proj-description-text"
                        dangerouslySetInnerHTML={{
                          __html: project.description,
                        }}
                      ></p>
                    </div>
                  )}
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
