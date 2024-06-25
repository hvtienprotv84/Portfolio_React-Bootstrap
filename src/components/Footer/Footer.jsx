import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";
import logo from "../../assets/logo_1.png";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright">
          <h3 className="mx-1">Copyright © {year} - <span style={{fontWeight: "bold", color: '#7500fa'}}>Huỳnh Vĩnh Tiến - </span></h3>
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/hvtienprotv84"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/vinhtien.huynh.77/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://zalo.me/0931103224"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiZalo
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
