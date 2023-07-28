import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import '../styles/components/answer.css'

export default function Answer(props) {
    const [isChecked, setIsChecked] = useState(props.question.answer != null ? props.answerOption.value === props.question.answer.value : false);

    const onClickAnswer = (questionId, answerOption) => {
        props.onClickAnswer(questionId, answerOption);
        setIsChecked(props.question.answer != null ? props.question.answer.value === answerOption.value : false);
    }

    return (
        <Col sm key={'answerCol' + props.question.id + props.answerOption.id}>
            <div className="d-flex flex-row pb-2" key={'answerDiv' + props.question.id + props.answerOption.id}>
                <input
                    key={'answerRadio' + props.question.id + props.answerOption.id}
                    name={props.question.title}
                    type="radio"
                    value={props.answerOption.value}
                    checked={isChecked}
                    onChange={event => onClickAnswer(props.question.id, props.answerOption)}
                />
                <small onClick={event => onClickAnswer(props.question.id, props.answerOption)} className="radioLabel" key={'answerLabel' + props.question.id + props.answerOption.id}>{props.answerOption.label}</small>
            </div>
        </Col>
    )
}