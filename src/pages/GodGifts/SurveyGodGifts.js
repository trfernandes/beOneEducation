import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as constants from "../../constants.js"
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';

import Question from '../../components/Question';

export default function SurveyGodGifts() {
    const navigate = useNavigate();
    const questions = constants.godGiftsQuestions;
    const questionsByPage = 10;
    const [indexPage, setIndexPage] = useState(1);

    const handleChangeAnswer = (questionId, chosenAnswer) => {
        questions[questionId - 1].answer = chosenAnswer;
    }

    const handleFinishButton = () => {
        if (validate()) {
            navigate('/resultsSurveyGodGifts', {
                state: { result: questions },
                replace: false
            });
        }
    }

    const handlePreviousQuestions = () => {
        if (canGoPreviousPage()) {
            setIndexPage(indexPage - 1);
        }
    }
    const handleNextQuestions = () => {
        if (canGoNextPage()) {

            setIndexPage(indexPage + 1);

        }
    }

    const canGoNextPage = () => {
        return indexPage < (questions.length / questionsByPage);
    }

    const canGoPreviousPage = () => {
        return indexPage > 1;
    }

    function getQuestionsOfActualPage() {
        const startIndex = questionsByPage * (indexPage - 1);
        const endIndex = (indexPage * questionsByPage) > questions.length ? questions.length : (indexPage * questionsByPage);
        return questions.slice(startIndex, endIndex);
    }

    function validate() {
        // if (questions.filter(question => question.answer === null).length === 0) {
        //     alert("Todas as questões devem ser respondidas");
        //     return false;
        // }
        return true;
    }

    function getPagination() {
        return Array(Math.floor(questions.length / questionsByPage)).fill().map((_, i) => i + 1);
    }

    function handleChangePage(indexPage) {
        setIndexPage(indexPage);
        window.scrollTo(0, 0);
    }

    return (
        <Container >
            <Card id='cardSurvey' className="shadow-lg p-2 bg-white rounded">
                <Card.Header className='d-flex pt-2 pl-0 flex-column bg-white align-items-left'>
                    <h3>Inventário de Dons</h3>
                    <small className="justifyText pb-2">Romanos 12:6b - tendo, porém, diferentes dons segundo a graça que nos foi dada...</small>
                </Card.Header>
                <Card.Body>

                    <div>
                        {getQuestionsOfActualPage().map((question) =>
                            <div key={'mainQuestionDiv'+question.id}>
                                <Question answerOptions={constants.godGiftsQuestionsAnswers} key={'question'+question.id}
                                    question={question} onChangeAnswer={handleChangeAnswer} />
                                <hr className="hr" key={'questionHR'+question.id}/>
                            </div>
                        )}
                    </div>

                </Card.Body>
                <Card.Footer className='bg-white'>
                    <div className='d-flex flex-row flex-wrap justify-content-between p-2 align-items-center '>
                        <Pagination  >
                            <div className='d-flex flex-row flex-wrap'>
                                <Pagination.First onClick={event => handleChangePage(1)} />
                                <Pagination.Prev onClick={event => handlePreviousQuestions()} />
                                {getPagination().map((i) =>
                                    <Pagination.Item onClick={event => handleChangePage(i)} active={indexPage === i}>{i}</Pagination.Item>
                                )}
                                <Pagination.Next onClick={event => handleNextQuestions()} />
                                <Pagination.Last onClick={event => handleChangePage(questions.length / questionsByPage)} />
                            </div>
                        </Pagination>

                        <div id='divButton'>
                            <Button id='buttonConcluir' variant="primary" onClick={handleFinishButton}>Concluir</Button>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </Container>
    )
}