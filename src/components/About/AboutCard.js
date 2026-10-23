import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nicholas Wong Kai Xin </span>
            from <span className="purple"> Penang, Malaysia.</span>
            <br />
            I am currently employed as a Software Development Engineer at Jabil Circuit Sdn Bhd.
            <br />
            I hold a BSc (Hons) in Computing from Coventry University, UK.
            <br />
            I also hold an MSc in Information Technology from INTI International University.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nicholas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
