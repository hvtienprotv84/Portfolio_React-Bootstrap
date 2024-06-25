import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
    SiAdobephotoshop,
    SiFigma,
 } from "react-icons/si";
 

const Designer = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma  />
      </Col>
    </Row>
  );
};

export default Designer;
