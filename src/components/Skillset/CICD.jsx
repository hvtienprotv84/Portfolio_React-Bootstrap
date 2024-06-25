import React from "react";
import { Col, Row } from "react-bootstrap";
import { GrDocker } from "react-icons/gr";


const CICD = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <GrDocker  />
      </Col>
    </Row>
  );
};

export default CICD;
