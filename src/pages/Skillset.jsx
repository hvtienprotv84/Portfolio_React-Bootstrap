import React from "react";
import { Container } from "react-bootstrap";

import Particle from "../components/Particle";
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Backend from "../components/Skillset/Backend";
import Database from "../components/Skillset/Database";
import CICD from "../components/Skillset/CICD";
import Designer from "../components/Skillset/Designer";
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Skills <strong className="yellow">Front-End </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
           <strong className="yellow">Designer</strong>
        </h1>

        <Designer />

        <h1 className="project-heading">
          <strong className="yellow">Back-End</strong> Skills
        </h1>
        <Toolstack />

        <h1 className="project-heading">
        <strong className="yellow">Database</strong>
        </h1>
        <Database />

        <h1 className="project-heading">
        <strong className="yellow">CI/CD</strong>
        </h1>
        <CICD />

        <h1 className="project-heading">
        Đã Làm Việc Với<strong className="yellow"> IDE</strong>
        </h1>
        <Backend />
        
        <Github />
      </Container>
    </Container>
  );
};

export default Skillset;
