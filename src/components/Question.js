import React from "react"
import '../styles/components/question.css'
import Answer from "./Answer.js";

export default function Question(props) {
    return (
        <div className="d-flex flex-column justify-content-start" key={'questionDiv'+props.question.id}>
            <h6 className="questionTitle" key={'questionTitleH6'+props.question.id}>{props.question.id + '. ' + props.question.title}</h6>
            <label key={'questionSubTitleLabel'+props.question.id} className="text-muted questionSubTitle"><small>{props.question.subtitle}</small></label>

            <div className="d-flex flex-column pt-3" key={'questionAnswersOptionDiv'+props.question.id}>
                {props.answerOptions.map((answerOption) =>
                    <Answer key={'questionAnswerOption'+props.question.id+answerOption.id} question={props.question} answerOption={answerOption} onClickAnswer={props.onChangeAnswer} />
                )}
            </div>

        </div>
    )
}