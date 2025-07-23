import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

// Importing certificate images or PDF links
import certificate4 from "../assets/certificate4.png";
import certificate2 from "../assets/certificate2.png";
import certificate1 from "../assets/certificate1.png";
import certificate7  from "../assets/certificate7.png";
import certificate6  from "../assets/certificate6.png";
import certificate5  from "../assets/certificate5.png";
import certificate3  from "../assets/certificate3.png";
import certificate8  from "../assets/certificate8.png";
import certificate9  from "../assets/certificate 9.png";
import certificate10  from "../assets/certificate 10.png";
import certificate11  from "../assets/certificate 11.png";
import certificate12  from "../assets/certificate 12.png";
import certificate13  from "../assets/certificate 13.png";
import certificate14  from "../assets/certificate 14.png";
import certificate15  from "../assets/certificate 15.jpg";
const certificates = [
  {
    title: "Certificate 15",
    link: certificate15,
    image: certificate15,
  },
  {
    title: "Certificate 14",
    link: certificate14,
    image: certificate14,
  },
  {
    title: "Certificate 4",
    link: certificate4,
    image: certificate4,
  },
  {
    title: "Certificate 2",
    link: certificate2,
    image: certificate2,
  },
  {
    title: "Certificate 1",
    link: certificate1,
    image: certificate1,
  },
  {
    title: "Certificate 7",
    link: certificate7,
    image: certificate7,
  },
  {
    title: "Certificate 6",
    link: certificate6,
    image: certificate6,
  },
  {
    title: "Certificate 5",
    link: certificate5,
    image: certificate5,
  },
  {
    title: "Certificate 3",
    link: certificate3,
    image: certificate3,
  },
  {
    title: "Certificate 8",
    link: certificate8,
    image: certificate8,
  },
  {
    title: "Certificate 9",
    link: certificate5,
    image: certificate9,
  },
  {
    title: "Certificate 10",
    link: certificate10,
    image: certificate10,
  },
  {
    title: "Certificate 11",
    link: certificate11,
    image: certificate11,
  },
  {
    title: "Certificate 12",
    link: certificate12,
    image: certificate12,
  },
  {
    title: "Certificate 13",
    link: certificate13,
    image: certificate13,
  },
  
  // Add more certificates as needed
];

const Certificates = () => {
  return (
    <Container fluid className="certificates-section">
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <h1>My Certificates</h1>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        {certificates.map((cert, index) => (
          <Col key={index} md={4} className="d-flex justify-content-center mb-4">
            <div className="certificate-card" style={{ textAlign: "center" }}>
              <img
                src={cert.image}
                alt={cert.title}
                style={{ maxWidth: "95%", borderRadius: "8px" }}
              />
              <h3>{cert.title}</h3>
              <Button
                variant="primary"
                href={cert.link}
                target="_blank"
                style={{ maxWidth: "200px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Certificates;
