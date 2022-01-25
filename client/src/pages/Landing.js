import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import biglogo from "../images/JesterLogo3.png";

const landing = () => {
  return (
    <div>
      <Container fluid>
        <Row className="biglogo">
          <Col>
          <Image src={biglogo} alt="biglogo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default landing;
