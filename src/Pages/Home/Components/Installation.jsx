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

function Installation() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Container fluid className="product">
        <Row>
          <Col>
            <Image
              className="mx-auto d-block"
              src="/images/installation.png"
              id="installation"
              alt="installation"
            />
          </Col>
          <Col>
            <h1 className="t-b">Installation photovoltaïque en toiture</h1>
            <h3
              className=" t-grey mt-4 "
              style={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              Confiez votre projet à Voltalia, notre équipe vous accompagne des
              premières questions jusqu’au raccordement de votre installation
              photovoltaïque sans oublier les démarches administratives et les
              conseils pour les différentes aides et primes dont vous pouvez
              bénéficier.
            </h3>

            <Row className="mt-5" style={{ textAlign: "center" }}>
              <Col>
                <button
                  onClick={() => setModalShow(true)}
                  className="bt-solarPrice"
                ></button>
                <p className="t-grey">
                  Je réalise une simulation pour une installation en toiture
                </p>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Col>
              <Col>
                <button className="bt-photos"></button>
                <p className="t-grey">Galerie photo</p>
              </Col>
              <Col>
                <button className="bt-contact"></button>
                <p className="t-grey">Être contacté par un conseiller</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Installation;
