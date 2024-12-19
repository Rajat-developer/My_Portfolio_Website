import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import instagram from "../assets/img/instagram.png";
import phone from "../assets/img/phone.png";
import gmail from "../assets/img/gmail.png";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4">
            <img src={contactImg} alt="Contact Us" className="contact-image" />
          </Col>
          <Col md={3}>
            <h2>Get In Touch</h2>
            <div className="contact-details">
              <div className="contact-item">
                <img src={phone} alt="Phone" className="contact-icon" />
                <span className="contact-text">+918791885238</span>
              </div>
              <div className="contact-item">
                <img src={gmail} alt="Gmail" className="contact-icon" />
                <a
                  href="mailto:fzdsharmarajat@gmail.com"
                  className="contact-text"
                >
                  fzdsharmarajat@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <img src={instagram} alt="Instagram" className="contact-icon" />
                <a
                  href={process.env.REACT_APP_INSTA_URL}
                  style={{ textDecoration: "none" }}
                >
                  <span className="contact-text">@iamrajat__sharma</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyright-text">
        <p>© 2024 All Rights Reserved.</p>
      </div>
    </section>
  );
};