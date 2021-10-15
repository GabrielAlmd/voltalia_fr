import React from 'react'
import { Col, Container, Row, Image } from "react-bootstrap";

function Batteries() {
    return (
        <>
            <Container fluid className="product">
                <Row>
                    <Col>
                        <Image
                            className="mx-auto d-block"
                            src="images/batterieDesc.png"
                            id="batteries"
                            alt="batteries"
                        />
                    </Col>
                    <Col>
                        <h1 className="t-b text-uppercase">Batterie de stockage résidentiel </h1>
                        <h3 className=" t-grey">Mes panneaux produisent en journée , je consomme en soirée</h3>
                        <h3
                            className=" t-grey mt-5"
                            style={{ textAlign: "justify", textJustify: "inter-word" }}
                        >
                            Le système va vous permettre d'augmenter votre indépendance énergétique.
                            <br/>Couplé à votre installation photovoltaïque, la batterie stocke votre surplus de production d'électricité et vous permet de l'utiliser lorsque vous en avez le plus besoin (en soirée, panne de courant...).
                            <br/>Un produit design et discret qui sera un véritable atout dans la gestion de votre maison autonome.
                        </h3>

                        <Row className="mt-5" style={{ textAlign: "center" }}>
                            <Col>
                                <button

                                    className="bt-file"
                                ></button>

                                <p className="t-grey">Fiche technique</p>
                            </Col>
                            <Col>
                                <button className="bt-photos"></button>
                                <p className="t-grey">Galerie photo</p>
                            </Col>
                        </Row>
                        <Row></Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Batteries
