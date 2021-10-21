import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function Mission() {
  return (
    <>
      <Container fluid className="mission">
        <h1 className="t-b" style={{ marginLeft: "70px" }}>
          Notre misson
        </h1>
        <div className="quote">
          <h1 className="t-grey">
            Améliorer <span>l’environnement mondial en</span>
            <br />
            Favorisant <span>le développement local</span>
          </h1>
        </div>

        <h1 id="energies" className="t-b">
          Voltalia, acteur international des énergies renouvelables
        </h1>

        <Container className="cleanEnergies">
          <Row className="d-flex justify-content-center text-center">
            <Col className="col-sm-offset-1 col-sm-3">
              <Image src="/icons/icon_wind.svg" id="wind" alt="wind" />
            </Col>
            <Col className="col-sm-7">
              <h4
                className="t-grey"
                style={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                  marginTop: "30px",
                  marginRight: "50px",
                  marginLeft: "0px",
                }}
              >
                La force du vent permet de produire de l’électricité dans des
                éoliennes. Cette énergie présente des facteurs de charge plus
                élevés que le solaire, mais nécessite un temps de développement
                et des investissements généralement supérieurs.
              </h4>
            </Col>
          </Row>

          <Row className="mt-5" />

          <Row className="d-flex justify-content-center text-center">
            <Col className="col-sm-offset-1 col-sm-3">
              <Image src="/icons/icon_solar.svg" id="solar" alt="solar" />
            </Col>
            <Col className="col-sm-7">
              <h4
                className="t-grey"
                style={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                  marginTop: "30px",
                  marginRight: "50px",
                  marginLeft: "0px",
                }}
              >
                L’énergie est produite grâce à la lumière du soleil captée par
                des panneaux photovoltaïques. La baisse majeure des coûts rend
                le solaire de plus en plus compétitif, partout où il y a du
                soleil.
              </h4>
            </Col>
          </Row>

          <Row className="mt-5" />

          <Row className="d-flex justify-content-center text-center">
            <Col className="col-sm-offset-1 col-sm-3">
              <Image src="/icons/icon_hydro.svg" id="hydro" alt="hydro" />
            </Col>
            <Col className="col-sm-7">
              <h4
                className="t-grey"
                style={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                  marginTop: "30px",
                  marginRight: "50px",
                  marginLeft: "0px",
                }}
              >
                Historiquement, l’hydroélectricité est la première source
                d’énergie renouvelable. Elle permet également d’effectuer du
                stockage. Voltalia se spécialise dans la petite hydro au fil de
                l’eau, sans barrages.
              </h4>
            </Col>
          </Row>

          <Row className="mt-5" />

          <Row className="d-flex justify-content-center text-center">
            <Col className="col-sm-offset-1 col-sm-3">
              <Image src="/icons/icon_bio.svg" id="bio" alt="bio" />
            </Col>
            <Col className="col-sm-7">
              <h4
                className="t-grey"
                style={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                  marginTop: "30px",
                  marginRight: "50px",
                  marginLeft: "0px",
                }}
              >
                Grâce à la chaleur dégagée par la combustion de matières
                végétales, notamment le bois, la biomasse permet de produire de
                l’électricité en continu. Une attention particulière est portée
                à la gestion durable des ressources utlisées pour alimenter les
                centrales de Voltalia.
              </h4>
            </Col>
          </Row>

          <Row className="mt-5" />

          <Row className="d-flex justify-content-center text-center">
            <Col className="col-sm-offset-1 col-sm-3">
              <Image
                src="/icons/icon_stockage.svg"
                id="stockage"
                alt="stockage"
              />
            </Col>
            <Col className="col-sm-7">
              <h4
                className="t-grey"
                style={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                  marginTop: "30px",
                  marginRight: "50px",
                  marginLeft: "0px",
                }}
              >
                Le stockage d’énergie permet notamment de compenser la nature
                intermittente des énergies renouvelables. Aujourd’hui, le
                stockage par batteries est la solution la plus couramment
                utilisée.
              </h4>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Mission;
