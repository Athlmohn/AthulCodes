import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix from '../../Assets/Projects/Netflix Clone.png'
import codesense from '../../Assets/Projects/Educational Website.png'
import foodvio from '../../Assets/Projects/FoodVio.png'
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="Clone of Netflix build completely using React, Optimize the app's performance and scalability by using React's virtual DOM and server-side rendering,Used React Router for Acessing diffrent Pages and axios for API fetching movie details,images and Trailers."
              ghLink="https://github.com/Athlmohn/Netflix-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codesense}
              isBlog={false}
              title="Edu-tech Website"
              description= "Static website completely build using  ReactJs,Used React Router for Acessing diffrent Pages,Various Pages like Courses list,Plans,About Us are Included."
              ghLink="https://github.com/Athlmohn/codesense_website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodvio}
              isBlog={false}
              title="Restaurant App"
              description="A Responsive restaurant app build using Material UI,Food Menu,Customer Reviews,Order Booking Details,About Pages are Included,Used React Router for Acessing diffrent Pages,Used Material UI icons."
              ghLink="https://github.com/Athlmohn/FoodVio_Restaurant"           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
