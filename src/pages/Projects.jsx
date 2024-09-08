import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import food from "../assets/projects/food.jpeg";
import dog from "../assets/projects/dog.png";
import speech from "../assets/projects/speech.png";
import gridlock from "../assets/projects/gridlock.jpeg";
import jobboard from "../assets/projects/jobboard.jpeg";
import quiz from "../assets/projects/quiz.jpeg"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gridlock}
              isBlog={false}
              title="MindGrid"
              description="Created a classic Tic-Tac-Toe game featuring a 3x3 grid where two players can compete by strategically placing Xs and Os. The game checks for wins by aligning symbols in rows, columns, or diagonals. Designed for simplicity and ease of play, providing an engaging experience for users."
              ghLink="https://github.com/anjali24srivastava/GridLock-G"
              demoLink="https://mindgrid.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dog}
              isBlog={false}
              title="Wagging-Tail : A Dog Blogging Website"
              description="Wagging-Tail is a vibrant and engaging dog blogging website designed to connect dog lovers and pet owners. Built with a user-friendly interface, this platform offers a space for sharing heartwarming stories, expert advice on dog care, training tips, and product reviews. As the developer, I focused on creating a responsive, interactive site with features like blog post management, user comments, and social sharing integration.."
              ghLink="https://github.com/anjali24srivastava/Wagging-Tail"
              demoLink="https://wagging-tail.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="QuizzicalHub"
              description="QuizzicalHub is a dynamic and interactive website designed for quiz enthusiasts. Built to deliver a seamless user experience, this platform allows users to participate in a wide variety of quizzes across different topics, from general knowledge to niche subjects. As the developer, I implemented features like user authentication, personalized quiz recommendations, real-time scoring, and a leaderboard system to enhance engagement."
              ghLink="https://github.com/anjali24srivastava/QuizzicalHub"
              demoLink="https://quizzicalhub.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speech}
              isBlog={false}
              title="VoiceMate-Convertor"
              description="Built Speech To Text Converter using HTML, CSS, JAVASCRIPT, PYTHON FLASK.Nearly 20% people of the world are suffering from various disabilities, many of them are blind or unable to use their hands effectively with the help of my project they can share information with people by operating computer through voice input Programming.Our project is capable to recognize the speech and convert the input audio in to text, it also enables a user to perform operations such as open calculator, wordpad,notepad,log off computer."
              ghLink="https://github.com/anjali24srivastava/VoiceMate"
              demoLink="https://buildbytes.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobboard}
              isBlog={false}
              title="Job Portal"
              description="Developed a job portal website that connects job seekers with employers. Features include advanced search filters, job listings, application tracking, and user profiles. Designed for ease of navigation, it enables users to quickly find and apply for jobs, while employers can post opportunities and manage applications efficiently."
              ghLink="https://github.com/anjali24srivastava/Job-Portal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Tasty Twists: Food Ordering Site"
              description=" Developed a user-friendly food ordering website that streamlines the process of selecting, customizing, and purchasing meals. Implemented features for menu browsing, real-time order tracking, and secure payment processing. Designed an intuitive seamless navigation, and integrated backend systems to ensure efficient order management and customer satisfaction."
              ghLink="https://github.com/anjali24srivastava/Dinner-Dive"
              // demoLink=""
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects