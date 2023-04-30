import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
<footer className="footer">
  <Container>
    <Row className="align-items-center justify-content-center">
      <Col xs={12} sm={6} className="text-center text-sm-start">
        <img src={logo} alt="Logo Eduardo" />
      </Col>
      
      <Col xs={12} sm={6} className="text-center text-sm-end mt-3 mt-sm-0">
        <div className="social-icon text">
          <a href="https://www.linkedin.com/in/edupe/" target="_blank" rel="noreferrer" ><img src={navIcon1} alt="Linkedin Icon" /></a>
          <a href="https://github.com/Duardohm/" target="_blank" rel="noreferrer"><img src={navIcon2} alt="GitHub Icon" /></a>
          <a href="https://www.instagram.com/Duardohm/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram Icon" /></a>
          <a href="https://linktr.ee/duardohm" target="_blank" rel="noreferrer"><img src={navIcon4} alt="My Links Icon" /></a>
          <p className="mb-0 mt-3 mt-sm-0">&copy; 2023. All Rights Reserved</p>
          <p className="mb-0 mt-3 mt-sm-0">Eduardo Pereira da Silva</p>
        </div>
      </Col>
    </Row>
  </Container>
</footer>

  );
};
