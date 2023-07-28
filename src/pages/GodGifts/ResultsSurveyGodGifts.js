import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from 'react-router-dom';
import * as evaluationGodsGifts from '../GodGifts/evaluationGodsGifts.js';
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import Accordion from 'react-bootstrap/Accordion';

export default function ResultsSurveyGodGifts() {
    const navigate = useNavigate();
    const location = useLocation();
    const questions = location.state.result;

    const evaluation = evaluationGodsGifts.evaluate(questions);
    console.log(evaluation.domThirdPlace);

    const handleBackButton = () => {
        navigate('/surveyGodGifts', {
            replace: true
        });
    }

    return (
        <Container >
            <Card className="shadow-lg p-2 bg-white rounded ">
                <Card.Header className='bg-white d-flex flex-column  align-items-left'>
                    <h3 className="d-inline-flex align-middle">
                        Resultados
                    </h3>
                </Card.Header>
                <Card.Body className>
                    <div>
                        <table className="table table-striped table-bordered table-hover table-responsive">
                            <thead>
                                <tr>
                                    <th scope="col">Dom</th>
                                    <th scope="col">Pontuação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {evaluation.scores.map((dom, index) =>
                                    <tr>
                                        <th scope="row" className={index < 3 ? 'bg-warning' : ''}><small>{dom.label}</small></th>
                                        <td className={index < 3 ? 'bg-warning' : ''}><small>{dom.score}</small></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><h6>Ranking</h6></Accordion.Header>
                            <Accordion.Body>
                                <p className="text-left font-weight-bolder text-nowrap">1º - {evaluation.domFirsPlace.label}</p>
                                <p className="text-left font-weight-bolder text-nowrap">2º - {evaluation.domSecondPlace.label}</p>
                                <p className="text-left font-weight-bolder text-nowrap">3º - {evaluation.domThirdPlace.label}</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><h6>Pontuação individual</h6></Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <table className="table table-striped table-bordered table-hover table-responsive">
                                        <thead>
                                            <tr>
                                                <th scope="col"><label>Dom</label></th>
                                                <th scope="col"><label>Pontuação</label></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {evaluation.scores.map((dom) =>
                                                <tr>
                                                    <td><label>{dom.label}</label></td>
                                                    <td><label>{dom.score}</label></td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion> */}
                </Card.Body >
                <Card.Footer className="p-3 bg-white">
                    <Button className=".d-sm-inline-flex" id='backButton' onClick={event => handleBackButton()}>Voltar </Button>
                </Card.Footer>
            </Card >
        </Container >
    )
}