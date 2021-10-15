import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Simulation() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Container fluid className="product">
                <Row style={{ alignItems: "center" }}>
                    <Col>
                        <h1 style={{ color: "#97AF0A" }}>
                            Je réalise une simulation pour une installation en toiture
                        </h1>
                        <h3 className="t-grey">
                            {" "}
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

                        <MyVerticallyCenteredModal
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
