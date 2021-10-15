import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

function Products() {
  return (
    <>
      <div id="section_2" className="section_2">
        <Container
          id="products"
          fluid
          style={{
            marginTop: "52px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Row style={{ textAlign: "center" }}>
            <h1 className="t-b">
              Le photovoltaïque accessible à tous et pour tous
            </h1>
          </Row>

          <Row>
            <Col style={{ marginTop: "30px" }}>
              <h3 className="mt-5 t-grey">
                Des produits pour faire ses premiers pas dans l'énergie verte
              </h3>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col>
              <Card border="0" bg="unset">
                <Card.Img
                  varian="center"
                  src="images/modulo_2.png"
                  id="modulo_2"
                  alt="modulo"
                />
                <Card.ImgOverlay className="d-flex flex-column">
                  <div className="mt-auto">
                    <button className="bt-green"></button>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              <h2 bold>
                01. <font size="5">SUPERSOLA</font>
              </h2>
              <h4 className="t-grey">
                Je déballe , je branche et c’est prêt Kit plug & play dédié à
                l’autoconsommation.
              </h4>
            </Col>
            <Col>
              <Card border="0" bg="unset">
                <Card.Img
                  varian="center"
                  src="images/modulo_1.png"
                  id="modulo_1"
                  alt="modulo"
                />
                <Card.ImgOverlay className="d-flex flex-column">
                  <div className="mt-auto">
                    <button className="bt-green"></button>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              <h2>
                02.<font size="5"> ENERGY KIT</font>
              </h2>
              <h4 className="t-grey">
                Je construis, je branche et c’est prêt Kit DIY dédié à
                l’autoconsommation
              </h4>
            </Col>
          </Row>
        </Container>

        <Container
          id="solutions"
          fluid
          style={{
            marginTop: "52px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Row>
            <Col style={{ marginTop: "30px" }}>
              <h3 className="mt-5 t-grey">
                Des solutions installées à votre domicile par un professionnel
              </h3>
            </Col>
          </Row>

          <Row className="mt-5" >
            <Col className="m-lg-4" >
              <Card border="0" bg="unset">
                <Card.Img
                  varian="center"
                  className="shadow p-0 mb-5 bg-white"
                  src="./images/house.png"
                  id="house"
                  alt="house"
                />
                <Card.ImgOverlay className="d-flex flex-column">
                  <div className="mt-auto">
                    <button className="bt-orange"></button>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col className="m-lg-4">
              <Card border="0" bg="unset">
                <Card.Img
                  varian="center"
                  className="shadow p-0 mb-5 bg-white"
                  src="./images/carport.png"
                  id="carport"
                  alt="carport"
                />
                <Card.ImgOverlay className="d-flex flex-column">
                  <div className="mt-auto">
                    <button className="bt-orange"></button>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col className="m-lg-4">
              <Card border="0" bg="unset">
                <Card.Img
                  varian="center"
                  className="shadow p-3 mb-5 bg-white"
                  src="./images/batteries.png"
                  id="batteries"
                  alt="batteries"
                />
                <Card.ImgOverlay className="d-flex flex-column">
                  <div className="mt-auto">
                    <button className="bt-orange"></button>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginLeft: "20px", marginTop: "0px" }}>
            <Col>
              <h2 className="text-uppercase">
                01. <font size="5">Installation photovoltaïque en toiture</font>
              </h2>
            </Col>
            <Col>
              <h2 className="text-uppercase">
                02.<font size="5"> Carport </font>
              </h2>
            </Col>
            <Col>
              <h2 className="text-uppercase">
                03. <font size="5">Stockage</font>
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Products;
