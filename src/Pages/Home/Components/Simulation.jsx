import React from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";

function SimulationModal(props) {
    return (
        <Modal
            {...props}
            size="xl"
            centered
        >
            <Modal.Body style={{ textAlign: "center"}}>
                <h1>Link for simulator</h1>
            </Modal.Body>

            
        </Modal>
    );
}

function Simulation() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Container id="simulation" fluid className="product">
                <Row style={{ alignItems: "center" }}>
                    <Col>
                        <h1 style={{ color: "#97AF0A" }}>
                            Je réalise une simulation pour une installation en toiture
                        </h1>
                        <h3 className="t-grey">
                            Le photovoltaïque accessible à tous et pour tous
                        </h3>
                        <h3 className="mt-4" style={{ textAlign: "justify", textJustify: "inter-word" }}>
                            En fonction de mon adresse, je peux simuler le nombre de panneaux
                            photovoltaïques installables en toiture et ma capacité de
                            production
                        </h3>
                    </Col>
                    <Col>
                        <button
                            onClick={() => setModalShow(true)}
                            className="bt-simulation"
                        ></button>

                        <SimulationModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Simulation;
