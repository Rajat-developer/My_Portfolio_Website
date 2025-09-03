import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Technical Support Specialist"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi, I'm Rajat Sharma`}</h1>
            <h2 className="wrap" style={{ color: "white" }}>
              {text}
            </h2>
            <p style={{ color: "#b8b8b8" }}>
             I am a passionate and detail-oriented Technical Support Specialist at LRS Pvt. Ltd. (deputed to TCS), where I ensure seamless IT operations and deliver reliable technical support for end users.

With hands-on experience in troubleshooting, system configuration, Active Directory, remote support, and Intune processes, I focus on resolving issues quickly while improving user satisfaction and productivity. My approach combines technical expertise with clear communication, helping users adopt IT solutions confidently.

I am continuously expanding my knowledge in IT support, cloud technologies, and infrastructure management, with a long-term goal of becoming a well-rounded IT professional who can manage and optimize enterprise-level IT systems.

💡 Core Skills: Windows OS | Active Directory | Intune | Troubleshooting | Remote Support | System Configuration | IT Infrastructure
📈 Always open to collaborations, knowledge-sharing, and connecting with professionals across the IT industry.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
