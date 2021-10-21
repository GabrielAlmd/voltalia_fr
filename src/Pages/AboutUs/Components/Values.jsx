import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'



function Values() {
    
    const [index, setIndex] = useState('0');
    const content = [
        {
        title: "Intégrité",
        context: "L'intégrité est l'une de nos meilleures valeurs. Nous fournissons nos services pour créer une valeur durable sur vos projets. Cela implique des équipes engagées, des projets qui respectent les besoins de nos partenaires et de bons conseils pour guider nos clients dans leurs choix. L'honnêteté, l'engagement au travail et la richesse du soutien sont la manière dont nous gérons notre culture d'entreprise."
        },
        {
            title: "Ingéniosité",
            context: "Le champ des possibles dans le domaine des énergies renouvelables est très vaste. Énergies multiples, surfaces multiples pour développer un projet. Énergies renouvelables riment avec ingéniosité, expertise et connaissance, autant de qualités que les collaborateurs de Voltalia développent et renforcent depuis 2005."
        },
        {
            title: "Esprit d’équipe",
            context: "Les profils des équipes qui composent Voltalia sont multiples. Commerciaux, ingénieurs, communication, HSE et experts environnementaux travaillent tous ensemble pour faire de chaque projet un succès. Nous pouvons être partout dans le monde, mais nous sommes tous déterminés à travailler ensemble pour la transition énergétique."
        },
        {
            title: "Entrepreneuriat",
            context: "Nous fournissons des services tout au long de la chaîne de valeur de nos projets d’énergie renouvelable. Le temps et la proactivité sont nécessaires pour que nos projets répondent aux attentes de nos clients. Les employés de Voltalia sont engagés dans le succès de chaque projet, ils créent de la valeur et prennent les meilleures décisions pour donner vie au projet."
        },
    ];
    
    return (
        <>
            <Container fluid className="values">
                <h1 className="t-b" style={{ marginLeft: "70px" }}>
                    Valeurs
                </h1>

                <Row style={{ paddingTop: "20px", alignItems: "center" }}>
                    <Col>
                    <Container style={{ textAlign: "center"}}>
                        <Row > 
                            <Col>
                                <button  id="valueBt" className="bt-integrite" onClick={()=>setIndex(0)} ></button>
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <button id="valueBt" className="bt-ingeniosite" onClick={()=>setIndex(1)}></button>
                            </Col>
                            <Col style={{ paddingLeft: "90px" }} >
                                <button id="valueBt" className="bt-esprit" onClick={()=>setIndex(2)}></button>
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <button id="valueBt" className="bt-entreneutiat" onClick={()=>setIndex(3)}></button>
                                
                            </Col>
                        </Row>
                    </Container>
                    </Col>

                    <Col id="text-values" style={{ paddingRight: "70px" }}>
                        <h1 className="t-b" >
                            {content[`${index}`].title}
                        </h1>
                        <h3 className="t-grey" style={{ textAlign: "justify", textJustify: "inter-word" }}>
                            {content[`${index}`].context}
                        </h3>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Values
