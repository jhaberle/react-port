import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Footer className="mt-5">
      <Container>
        <Row>
          <Col className="p-0" md={3} sm={12}>
            Jake Haberle
          </Col>
        </Row>
      </Container>
    </Footer>
  );
};

export default Footer;
