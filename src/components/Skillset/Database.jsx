import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVisualstudio,
  SiIntellijidea,
  SiApachenetbeanside,
  SiSublimetext,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";

const Database = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoPostgresql  />
      </Col>
    </Row>
  );
};

export default Database;
