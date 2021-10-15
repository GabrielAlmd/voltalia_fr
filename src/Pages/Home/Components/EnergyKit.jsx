import React from "react";
import { Col, Container, Row, Image, Modal, Button } from "react-bootstrap";

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

function EnergyKit() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Container fluid className="product">
        <Row>
          <Col>
            <Image
              className="mx-auto d-block"
              src="images/energyKit.png"
              id="energyKit"
              alt="energyKit"
            />
          </Col>
          <Col>
            <h1 className="t-b text-uppercase">Energy kit </h1>
            <h3
              className=" t-grey mt-4"
              style={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              Energy Kit est un kit d’autoproduction d’énergie solaire Plug &
              play à monter soi-même. En 30 minutes votre appareil est assemblé.
              Son installation peut se faire en facade, au sol ou sur un toit
              terrasse.
              <br /> L’Energy Kit peut produire jusqu’à 340kWh par an , soit
              l’équivalent de 150 cycles de lavage avec votre lave-linge!
            </h3>

            <Row className="mt-5" style={{ textAlign: "center" }}>
              <Col>
                <button
                  onClick={() => setModalShow(true)}
                  className="bt-file"
                ></button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />

                <p className="t-grey">Fiche technique</p>
              </Col>
              <Col>
                <button className="bt-video"></button>
                <p className="t-grey">Vidéo Montage</p>
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
  );
}

export default EnergyKit;
