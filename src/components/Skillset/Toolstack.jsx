import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiNetlify } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { 
  SiExpress,
  SiCsharp,
  SiPhp,
 } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp  />
      </Col>
    </Row>
  );
};

export default Toolstack;
