import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
// projects imports
// import Blog from "../assets/projects/blog.png";
import ecommerce from "../assets/projects/e-commerce.png";
import bmi from "../assets/projects/bmi.png";
import currency from "../assets/projects/corrency.png";
import weather from "../assets/projects/weather.png";
// import food from "../assets/projects/food.png";
// import gpf from "../assets/projects/gpf.png";
// import game from "../assets/projects/tictactoe.png";
// import calc from "../assets/projects/calc.png";
// import multi from "../assets/projects/multistepform.png";
import fdw from "../assets/projects/food-delivery-website.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="yellow">Projects </strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          có vài projects.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={Blog}
              imgPath='https://statics.cdn.200lab.io/2023/09/socketio-la-gi.jpeg'
              isBlog={false}
              title="MERN - ChatApp - Socket.io"
              ghLink="https://github.com/hvtienprotv84/MERN_ChatApp_Socket.io"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://cache.luxurydaily.com/wp-content/uploads/2019/03/Tesla-website.png'
              isBlog={false}
              title="Tesla Ecommerce"
              ghLink="https://github.com/hvtienprotv84/Tesla_Ecommerce"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://wallpapers.com/images/hd/vue-js-programming-nmw3bm4aj9o70p7k.jpg'
              isBlog={false}
              title="VueJS - LandingPage"
              ghLink="https://github.com/hvtienprotv84/VueJS_LandingPage"
              demoLink="/"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://ionic.io/blog/wp-content/uploads/2023/12/angular-feature-image.png'
              isBlog={false}
              title="Angular - LandingPage"
              ghLink="https://github.com/hvtienprotv84/Angular_LandingPage"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg'
              isBlog={false}
              title="NextJS - LandingPage"
              ghLink="https://github.com/hvtienprotv84/NextJS_LandingPage"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://github.githubassets.com/assets/hero-mobile-7163f4f5de41.webp'
              isBlog={false}
              title="Search - Users - Github - API"
              ghLink="https://github.com/hvtienprotv84/Search_Users_Github_API"
              demoLink="/"
            />
          </Col>

        </Row>

        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gpf}
              isBlog={false}
              title="GitHub Profile Finder"
              ghLink="https://github.com/svivek19/github-profile-finder.git"
              demoLink="https://github-profile-finder-vvk.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Tic Tac Toe Game"
              ghLink="https://github.com/svivek19/tic-tac-toe-game-react.git"
              demoLink="https://tic-tac-toe-react-vvk.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="Calculator"
              ghLink="https://github.com/svivek19/calculator-react.git"
              demoLink="https://calculator-react-vvk.netlify.app/"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multi}
              isBlog={false}
              title="Multi Step Form"
              ghLink="https://github.com/svivek19/Aeonaxy-Technologies-Private-Limited.git"
              demoLink="https://aeonaxy-technologies-pvt-limited.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Recipe Finder"
              ghLink="https://github.com/svivek19/recipe-finder-react.git"
              demoLink="https://recipe-finder-vivek.netlify.app/"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
};

export default Projects;
