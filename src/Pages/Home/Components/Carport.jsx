import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

function Carport() {
    return (
        <>
            <Container fluid className="product">
                <Row>
                    <Col>
                        <Image
                            className="mx-auto d-block"
                            src="images/carportDesc.png"
                            id="carport"
                            alt="carport"
                        />
                    </Col>
                    <Col>
                        <h1 className="t-b text-uppercase">Carport auto</h1>
                        <h3
                            className=" t-grey mt-4"
                            style={{ textAlign: "justify", textJustify: "inter-word" }}
                        >
                            Mettez à l’abri votre véhicule et produisez de l’énergie.  l'énergie produite peut:
                            <br/>- être revendue et vous apporter un complément de revenu
                            <br/>- être utilisée en autoconsommation pour votre domicile
                            <br/>- réduire votre facture d’électricité
                            <br/>- participer à la recharge de vos véhicules électriques
                        </h3>

                        <Row className="mt-5" style={{ textAlign: "center" }}>
                            <Col>
                                <button className="bt-file"></button>

                                <p className="t-grey">Fiche technique</p>
                            </Col>
                            <Col>
                                <button className="bt-photos"></button>
                                <p className="t-grey">Galerie photo</p>
                            </Col>
                            <Col>
                                <button className="bt-contact"></button>
                                <p className="t-grey">Être contacté
                                    par un conseiller</p>
                            </Col>
                        </Row>
                        <Row></Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Carport;
