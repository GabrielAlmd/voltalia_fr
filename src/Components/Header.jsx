import React from "react";
import "./Header.css";
import { Navbar, Container, Nav, Image } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home-presentation">
            <Image
              src="images/logo-voltalia.png"
              width="169"
              height="41"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 justify-content-end"
              style={{ maxHeight: "100px", width: "100%" }}
              navbarScroll
            >
              <Nav.Link href="/home-presentation#products" varian>Produits</Nav.Link>
              <Nav.Link href="/home-presentation#solutions">Installations domestiques</Nav.Link>
              <Nav.Link href="/home-presentation#section3">Outils de simulation</Nav.Link>
              <Nav.Link href="/about-us">
                Voltalia: Une entreprise à mission
              </Nav.Link>
              <Nav.Link href="/photovoltaic">
                Qu’est ce que l’énergie photovoltaïque?
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
