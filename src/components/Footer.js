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
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo Eduardo" />
          </Col>
          
          <Col className="text-center text-sm-end">
            <div className="social-icon text">
              <a href="https://www.linkedin.com/in/edupe/" target="_blank" rel="noreferrer" ><img src={navIcon1} alt="Ícone do Linkedin" /></a>
              <a href="https://github.com/Eh-Duardo/" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Ícone do GitHub" /></a>
              <a href="https://www.instagram.com/Duardohm/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Ícone do Instagram" /></a>
              <a href="https://linktr.ee/duardohm" target="_blank" rel="noreferrer"><img src={navIcon4} alt="Ícone de Links" /></a>
              <p>© Copyright 2023. All Rights Reserved</p>
              <p>Eduardo Pereira da Silva</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
