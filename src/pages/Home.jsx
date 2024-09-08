import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import personal from '../assets/personal.jpg'; // Ensure this path is correct

import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import 'animate.css';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Anjali Srivastava</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={personal}
                alt="Personal"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius: "50%" }} // Adjust styles as needed
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home;
