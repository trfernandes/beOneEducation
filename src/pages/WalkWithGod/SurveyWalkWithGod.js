import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Question from '../../components/Question';
import { WalkWithGodQuestions } from '../../constants';
import * as constants from "../../constants.js"
import Button from 'react-bootstrap/esm/Button';
import '../../styles/WalkWithGod/WalkWithGod.css'

export default function SurveyWalkWithGod() {
    const navigate = useNavigate();

    const [questions, setQuestions] = useState(WalkWithGodQuestions);

    //by clicking on the radiobutton
    const handleChangeAnswer = (questionIndex, chosenAnswer) => {
        questions[questionIndex - 1].answer = chosenAnswer;
    }

    const handleFinishButton = () => {
        if (validate()) {
            navigate('/resultsSurveyWalkWithGod', {
                state: { result: questions },
                replace: false
            });
        }
    }

    function validate() {
        // console.log(questions.filter(question => question.answer === null));
        // if (questions.filter(question => question.answer === null).length > 0) {
        //     alert("Todas as questões devem ser respondidas");
        //     return false;
        // }
        return true;
    }

    return (
        <Container>
            <Card className="shadow-lg p-2 mb-5 bg-white rounded">
                <Card.Header className='d-flex pt-2 bg-white pl-0 flex-column  align-items-left'>
                    <h3>Caminhada com Deus</h3>
                    <small className="justifyText pb-2">
                        Marque a opção correspondente a realidade de cada um dos 15 critérios de sua caminhada com Deus.<br></br>
                        Responda com absoluta sinceridade. As respostas servem apara ajudá-lo no seu crescimento espiritual, revelando áreas mais forte e áreas mais frágeis.
                    </small>
                </Card.Header>
                <Card.Body>
                    {questions.map((question) =>
                        <div>
                            <Question question={question} answerOptions={constants.WalkWithGodAnswer} onChangeAnswer={handleChangeAnswer} />
                            <hr className="hr" />
                        </div>
                    )}
                </Card.Body>
                <Card.Footer className='pt-4 bg-white'>
                    <Button className='align-middle' id='buttonConcluir' variant="primary" onClick={handleFinishButton}>Concluir</Button>
                </Card.Footer>
            </Card>
        </Container>
    )
}