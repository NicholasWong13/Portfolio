import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import RideEase from "../../Assets/Projects/RideEase.png";
import MealTime from "../../Assets/Projects/MealTime.png";
import StudioC from "../../Assets/Projects/StudioC.png";
import BudgetBuddy from "../../Assets/Projects/BudgetBuddy.png";
import Food2Go from "../../Assets/Projects/Food2Go.png";
import NickCarWash from "../../Assets/Projects/NickCarWash.png";
import {
  SiFlutter
} from "react-icons/si";

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
              imgPath={RideEase}
              isBlog={false}
              title="Ride Ease"
              description="This project specializes in renting cars to customers, an online system through which customers can view available cars, register, view profiles, and book cars."
              ghLink="https://github.com/NicholasWong13/Final_Year_Project-Ride-Ease"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MealTime}
              isBlog={false}
              title="Meal Time"
              description="A recipe app that retrieves the recipe of various dishes from TheMealDB API. This project was created with React and Node.js (Front-end) , Express.js and Mongodb Atlas (Back-end)."
              ghLink="https://github.com/NicholasWong13/6003CEM_NicholasWong_TheMealDB"
              demoLink="https://6003-cem-nicholas-wong-the-meal-db.vercel.app/"
            />
          </Col> 
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StudioC}
              isBlog={false}
              title="Studio C Hair & Beauty Salon"
              description="Developing a hair salon website with the title named Studio C Hair & Beauty Salon which can deal with customer’s enquiries and reviews, order processing, stock control and marketing."
              ghLink="https://github.com/NicholasWong13/5010CEM_Enterprise-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BudgetBuddy}
              isBlog={false}
              title="Budget Buddy"
              description="This application was designed with Flutter and allows users to calculate their expenses.It allows users to record income and expenses, view transaction history, and analyze spending patterns. The application provides detailed reports and visualizations, allowing users to gain insights into their financial patterns."
              ghLink="https://github.com/NicholasWong13/6002CEM_MobileAppDevelopment_Group8"
              demoLink="https://youtu.be/-GBnuU2jrjM"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Food2Go}
              isBlog={false}
              title="Food 2 Go"
              description="This application was designed with developing a Food Delivery App. The programming code that is used is Java language & Android SDK. The project is using Android Studio to create an app with the purpose of purchasing and delivering food to customers."
              ghLink="https://github.com/NicholasWong13/A202SGI-AndroidDevelopmentSkills_Food2Go"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NickCarWash}
              isBlog={false}
              title="Nick's Car Wash"
              description="A second year individual university project for 5007CEM Web Development course. This was a basic web development project where the tasked with creating a website for a car wash using HTML, CSS, PHP, MySQL, and JavaScript."
              ghLink="https://github.com/NicholasWong13/5007CEM-WebDevelopment"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
