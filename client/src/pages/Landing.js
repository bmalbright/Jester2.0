import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import biglogo from "../images/JesterLogo3.png";

const landing = () => {
  return (
    <div>
      <Container fluid>
        <Row className="biglogo">
          
          <Image src={biglogo} alt="biglogo" />
        
        </Row>
      </Container>
    </div>
  );
};

export default landing;
