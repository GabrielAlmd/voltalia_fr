import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

function Keys() {
    return (
        <>
            <Container fluid className="keys">
                <h1 className="t-b" style={{ marginLeft: "70px" }}>
            Ciffres clés
                </h1>

                <Row style={{ textAlign: "center", paddingTop: "156px" }}>
                    <Col>
                        <Image src="/icons/icon_install.png" id="install" alt="install" />
                        <h1 className="mt-3 t-b">
                        +1,3GW 
                        </h1>
                        <h3 className="mt-3">
                        de capacité installée
                        </h3>
                        
                    </Col>
                    <Col>
                        <Image src="/icons/icon_projects.png" id="projects" alt="projects" />
                        <h1 className="mt-3 t-b">
                        10,7GW
                        </h1>
                        <h3 className="mt-3">
                        de portefeuille de projets
                        </h3>
                    </Col>
                    <Col>
                        <Image src="/icons/icon_world.svg" id="world" alt="world" />
                        <h1 className="mt-3 t-b">
                        20
                        </h1>
                        <h3 className="mt-3">
                        pays sur 3 continents
                        </h3>
                    </Col>
                    <Col>
                        <Image src="/icons/icon_tec.png" id="tec" alt="tec" />
                        <h1 className="mt-3 t-b">
                        5
                        </h1>
                        <h3 className="mt-3">
                        technologies
                        </h3>
                    </Col>
                </Row>

                <h1 className="t-b" style={{ marginLeft: "70px", paddingTop: "230px" }}>
                Nos bureaux
                </h1>
                
            </Container>

            <Image fluid src="/images/map.png" id="map" alt="map" style={{ paddingBottom: "30px" }} />
        </>
    )
}

export default Keys
