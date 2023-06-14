import React from "react";
import Card from "react-bootstrap/Card";
import { MdOfflineBolt } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Athul Mohan </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            <br />
            I'm a Front-End Developer with experience in building responsive designs using React and I'm a excellent communicator and team player. I believe collaboration and open communication are key to delivering successful projects, and I strive to maintain a positive and collaborative environment with my colleagues and clients.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <MdOfflineBolt /> Watching Movies
            </li>
            <li className="about-activity">
              < MdOfflineBolt/> Learning New Skills
            </li>
            <li className="about-activity">
              <MdOfflineBolt /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Fall if you wish to Fly!"{" "}
          </p>
          <footer className="blockquote-footer">Athul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
