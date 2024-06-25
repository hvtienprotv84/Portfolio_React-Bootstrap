import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import "./Social.css";

const Social = () => {
  return (
    <Container style={{ padding: "30px" }}>
      <Row>
        <Col md={12} className="contact-social">
          <div className="contact-text">
            <h1>LIÊN HỆ VỚI TÔI</h1>
            <p>
            Xin đừng ngần ngại liên hệ với mình và{" "}
              <span className="yellow">kết nối nhé!.</span>
            </p>
          </div>
          <ul className="contact-social-links">
          <li className="contact-icons">
              <a
                href="https://github.com/svivek19"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://github.com/svivek19"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <SiZalo />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://github.com/svivek19"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://github.com/svivek19"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <BsInstagram />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://github.com/svivek19"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <BsTwitterX />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.linkedin.com/in/svivek018/"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;
