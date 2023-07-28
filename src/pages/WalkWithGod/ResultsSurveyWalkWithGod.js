import React from 'react';
import { useLocation } from "react-router";
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

export default function ResultsSurveyWalkWithGod() {

    const navigate = useNavigate();
    const location = useLocation();
    const result = location.state.result;
    result.sort(function (a, b) {
        if (a.answer == null || b.answer == null) return 0;
        if (a.answer.id > b.answer.id) return -1;
        if (a.answer.id < b.answer.id) return 1;
        return 0;
    });

    const firstStrongCriterion = result[0];
    const secondStrongCriterion = result[1];
    const thirdStrongCriterion = result[2];

    const firstWeakCriterion = result[(result.length - 1) - 2];
    const secondWeakCriterion = result[(result.length - 1) - 1];
    const thirdWeakCriterion = result[(result.length - 1)];


    const handleBackButton = () => {
        navigate('/caminhadaDeus', {
            replace: true
        });
    }

    return (
        <Container>

            <Card className="shadow-lg p-2 mb-5 bg-white rounded ">
                <Card.Header className='bg-white d-flex pt-2 pb-3 pl-0 flex-column  align-items-left'>
                    <h3 className="d-inline-flex align-middle">
                        Resultados
                    </h3>
                </Card.Header>
                <Card.Body className=''>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h6>Critérios Fortes</h6></Accordion.Header>
                            <Accordion.Body>
                                <div id='divStrongCriteria'>
                                    <label>1. {(firstStrongCriterion == null || firstStrongCriterion === 'undefined') ? '' : firstStrongCriterion.title}</label><p />
                                    <label>2. {(secondStrongCriterion == null || secondStrongCriterion === 'undefined') ? '' : secondStrongCriterion.title}</label><p />
                                    <label>3. {(thirdStrongCriterion == null || thirdStrongCriterion === 'undefined') ? '' : thirdStrongCriterion.title}</label><p />

                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h6>Critérios Fracos</h6></Accordion.Header>
                            <Accordion.Body>
                                <div id='divWeakCriteria'>
                                    <label>1. {(firstWeakCriterion == null || firstWeakCriterion === 'undefined') ? '' : firstWeakCriterion.title}</label><p />
                                    <label>2. {(secondWeakCriterion == null || secondWeakCriterion === 'undefined') ? '' : secondWeakCriterion.title}</label><p />
                                    <label>3. {(thirdWeakCriterion == null || thirdWeakCriterion === 'undefined') ? '' : thirdWeakCriterion.title}</label><p />
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Body>
                <Card.Footer className='p-3 bg-white'>
                    <Button className=".d-sm-inline-flex" id='backButton' onClick={event => handleBackButton()}>Voltar </Button>
                </Card.Footer>
            </Card>

        </Container>
    )
}