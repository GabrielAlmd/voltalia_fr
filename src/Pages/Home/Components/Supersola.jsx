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

function Supersola() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Container fluid className="product">
        <Row>
          <Col>
            <Image
              className="mx-auto d-block"
              src="images/supersola.png"
              alt="supersola"
              id="supersola"
            />
          </Col>
          <Col>
            <h1 className="t-b text-uppercase">SUPERSOLA</h1>
            <h3
              className=" t-grey mt-4"
              style={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              Supersola est un kit d'autoproduction d'énergie solaire Plug &
              Play, son installation se fait en 3 étapes: je déballe mon
              produit, je remplis les ballasts d'eau et je le branche en
              extérieur. En 15 minutes vous êtes devenu producteur de votre
              propre énergie.
            </h3>

            <Row className="mt-5" style={{ textAlign: "center" }}>
              <Col>
                <button
                  onClick={() => setModalShow(true)}
                  className="bt-360"
                ></button>
                <p className="t-grey">Visualiser le produit</p>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Col>
              <Col>
                <button className="bt-file"></button>
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

export default Supersola;
