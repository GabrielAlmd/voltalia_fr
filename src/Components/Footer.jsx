import React from "react";
import "./Components.css";
import ScrollButton from "./ScrollButton";
import { Col, Container, Image, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <footer className="text-white text-center text-lg-start fixed-bottom img-footer">
        <Container className="footer-icons">
          <Row style={{ alignContent: "center", textAlign: "center", alignItems: "center" }}>
            <Col>
              <Image src="icons/icon_scroll.svg" height="45"/>
            </Col>
            <Col>
              <h5 color="white" style={{  paddingLeft: "300px", marginTop: "13px" }}>copyright@Voltalia</h5>
            </Col>
            <Col style={{ paddingLeft: "300px" }}>
              <ScrollButton/>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
