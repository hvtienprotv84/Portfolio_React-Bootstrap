import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiRedux,
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiJavascript,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { IoLogoSass } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";



const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img style={{width: "80px", height: "80px",}} src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStyledcomponents  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{width: "65px", height: "60px",}} src="https://static-00.iconduck.com/assets.00/material-ui-icon-512x406-fhnu85xg.png" alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt/>
      </Col>
    </Row>
  );
};

export default Techstack;
