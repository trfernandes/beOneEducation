import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from 'react-router-dom';
import * as evaluationGodsGifts from '../GodGifts/evaluationGodsGifts.js';
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";

export default function ResultsSurveyGodGifts() {

    const navigate = useNavigate();
    const location = useLocation();
    const questions = location.state.result;

    const evaluation = evaluationGodsGifts.evaluate(questions);
    console.log(evaluation.domThirdPlace);

    const handleBackButton = () => {
        navigate('/inventarioDons', {
            replace: false,
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
                </Card.Body >
                <Card.Footer className="p-3 bg-white">
                    <Button className=".d-sm-inline-flex" id='backButton' onClick={event => handleBackButton()}>Voltar </Button>
                </Card.Footer>
            </Card >
        </Container >
    )
}