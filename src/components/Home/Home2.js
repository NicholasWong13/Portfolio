
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm passionate about{" "}
              <b className="purple">Web Development</b> and{" "}
              <b className="purple">Software Development</b>, with a strong
              interest in creating innovative, scalable, and user-friendly
              applications.
              <br />
              <br />
              My technical skills include working with technologies such as{" "}
              <i>
                <b className="purple">
                  HTML, CSS, JavaScript, PHP, Bootstrap, React.js, C#, and .NET.
                </b>
              </i>
              <br />
              <br />
              I enjoy designing and developing responsive websites,
              building interactive user interfaces, and creating efficient
              software solutions that solve real-world problems.
              <br />
              <br />
              I'm also interested in{" "}
              <b className="purple">
                Backend Development, API Integration, and Full-Stack Development.
              </b>{" "}
              I enjoy exploring modern technologies and frameworks, including{" "}
              <i>
                <b className="purple">
                  Node.js, React.js, and the .NET framework
                </b>
              </i>
              , to build reliable and maintainable applications.
              <br />
              <br />
              My goal is to continuously improve my technical skills,
              explore new technologies, and develop software that delivers
              meaningful value to users and businesses.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/NicholasWong13"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nicholas-wong-58333621b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
