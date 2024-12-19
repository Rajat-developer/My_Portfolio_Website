import { Col, Container, Row, Tab, Carousel } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import colorSharp from "../assets/img/color-sharp.png";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

export const Skills = () => {
  const technicalSkills = [
    { title: "JavaScript", imgUrl: meter1 },
    { title: "MongoDB", imgUrl: meter2 },
    { title: "React.js", imgUrl: meter2 },
    { title: "HTML5", imgUrl: meter1 },
    { title: "CSS", imgUrl: meter3 },
    { title: "Node.js", imgUrl: meter2 },
  ];

  const softSkills = [
    { title: "Teamwork", imgUrl: meter1 },
    { title: "Communication", imgUrl: meter2 },
    { title: "Problem-Solving", imgUrl: meter3 },
    { title: "Adaptability", imgUrl: meter1 },
    { title: "Leadership", imgUrl: meter2 },
  ];

  const tools = [
    { title: "Git", imgUrl: meter3 },
    { title: "GitHub", imgUrl: meter3 },
    { title: "VS Code", imgUrl: meter3 },
    { title: "Postman", imgUrl: meter2 },
    { title: "MsOffice", imgUrl: meter2 },
  ];

  const chunkSkills = (skills) => {
    const chunked = [];
    for (let i = 0; i < skills.length; i += 3) {
      chunked.push(skills.slice(i, i + 3));
    }
    return chunked;
  };

  const technicalSkillsChunks = chunkSkills(technicalSkills);
  const softSkillsChunks = chunkSkills(softSkills);
  const toolsChunks = chunkSkills(tools);

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <h2>Skills & Tools</h2>
            <p>
              Discover my expertise in technical and soft skills, along with the
              essential tools that I rely on for creating efficient and scalable
              solutions. This section highlights the technologies I master, my
              interpersonal strengths, and the tools that streamline my
              development process.
            </p>
            <Tab.Container id="skills-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Technical Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Soft Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tools</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                {/* Technical Skills */}
                <Tab.Pane eventKey="first">
                  <Carousel indicators={false}>
                    {technicalSkillsChunks.map((chunk, index) => (
                      <Carousel.Item key={index}>
                        <Row>
                          {chunk.map((skill, i) => (
                            <Col key={i} sm={4}>
                              <div className="skill-container">
                                <img
                                  src={skill.imgUrl}
                                  alt={skill.title}
                                  className="skill-meter"
                                />
                                <h4
                                  style={{ fontSize: "15px", color: "#868686" }}
                                >
                                  {skill.title}
                                </h4>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Tab.Pane>

                {/* Soft Skills */}
                <Tab.Pane eventKey="second">
                  <Carousel indicators={false}>
                    {softSkillsChunks.map((chunk, index) => (
                      <Carousel.Item key={index}>
                        <Row>
                          {chunk.map((skill, i) => (
                            <Col key={i} sm={4}>
                              <div className="skill-container">
                                <img
                                  src={skill.imgUrl}
                                  alt={skill.title}
                                  className="skill-meter"
                                />
                                <h4
                                  style={{ fontSize: "15px", color: "#868686" }}
                                >
                                  {skill.title}
                                </h4>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Tab.Pane>

                {/* Tools */}
                <Tab.Pane eventKey="third">
                  <Carousel indicators={false}>
                    {toolsChunks.map((chunk, index) => (
                      <Carousel.Item key={index}>
                        <Row>
                          {chunk.map((tool, i) => (
                            <Col key={i} sm={4}>
                              <div className="skill-container">
                                <img
                                  src={tool.imgUrl}
                                  alt={tool.title}
                                  className="skill-meter"
                                />
                                <h4
                                  style={{ fontSize: "15px", color: "#868686" }}
                                >
                                  {tool.title}
                                </h4>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
