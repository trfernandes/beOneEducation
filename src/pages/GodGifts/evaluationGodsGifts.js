function calcDom(questions, questionsNumber) {

    if (questions == null)
        return 0;

    if (questionsNumber === null || questionsNumber.length === 0)
        return 0;

    let domSum = 0;
    questionsNumber.map((number) =>
        domSum += questions[number - 1] != null
            ? questions[number - 1].answer != null
                ? parseInt(questions[number - 1].answer.value)
                : 0
            : 0
    );

    return domSum;
}

function getSumDomAdministracao(questions) {
    return calcDom(questions, [1, 16, 31, 46]);
}
function getSumDomDiscernimento(questions) {
    return calcDom(questions, [2, 17, 32, 47]);
}
function getSumDomExortação(questions) {
    return calcDom(questions, [3, 18, 33, 48]);
}
function getSumDomFe(questions) {
    return calcDom(questions, [4, 19, 34, 49]);
}
function getSumDomLiberalidade(questions) {
    return calcDom(questions, [5, 20, 35, 50]);
}
function getSumDomSocorroeMisericordia(questions) {
    return calcDom(questions, [6, 21, 36, 51]);
}
function getSumDomHospitalidade(questions) {
    return calcDom(questions, [7, 22, 37, 52]);
}
function getSumDomIntercessao(questions) {
    return calcDom(questions, [8, 23, 38, 53]);
}
function getSumDomConhecimento(questions) {
    return calcDom(questions, [9, 24, 39, 54]);
}
function getSumDomLideranca(questions) {
    return calcDom(questions, [10, 25, 40, 55]);
}
function getSumDomCura(questions) {
    return calcDom(questions, [11, 26, 41, 56]);
}
function getSumDomLinguasInterpretacao(questions) {
    return calcDom(questions, [12, 27, 42, 57]);
}
function getSumDomProfecia(questions) {
    return calcDom(questions, [13, 28, 43, 58]);
}
function getSumDomEnsino(questions) {
    return calcDom(questions, [14, 29, 44, 59]);
}
function getSumDomSabedoria(questions) {
    return calcDom(questions, [15, 30, 45, 60]);
}

export function evaluate(questions) {
    let domsScores = [
        {
            label: 'Administração',
            score: getSumDomAdministracao(questions)
        },
        {
            label: 'Discernimento',
            score: getSumDomDiscernimento(questions)
        },
        {
            label: 'Exortação',
            score: getSumDomExortação(questions)
        },
        {
            label: 'Fé',
            score: getSumDomFe(questions)
        },
        {
            label: 'Liberalidade',
            score: getSumDomLiberalidade(questions)
        },
        {
            label: 'Socorro e Misericórdia',
            score: getSumDomSocorroeMisericordia(questions)
        },
        {
            label: 'Hospitalidade',
            score: getSumDomHospitalidade(questions)
        },
        {
            label: 'Intercessão',
            score: getSumDomIntercessao(questions)
        },
        {
            label: 'Conhecimento',
            score: getSumDomConhecimento(questions)
        },
        {
            label: 'Liderança',
            score: getSumDomLideranca(questions)
        },
        {
            label: 'Cura',
            score: getSumDomCura(questions)
        },
        {
            label: 'Línguas e Interpretação',
            score: getSumDomLinguasInterpretacao(questions)
        },
        {
            label: 'Profecia',
            score: getSumDomProfecia(questions)
        },
        {
            label: 'Ensino',
            score: getSumDomEnsino(questions)
        },
        {
            label: 'Sabedoria',
            score: getSumDomSabedoria(questions)
        },
    ];

    //sort by score
    domsScores.sort(function (a, b) {
        if (a.score == null || b.score == null) return 0;
        if (a.score > b.score) return -1;
        if (a.score < b.score) return 1;
        return 0;
    });

    return {
        domFirsPlace: domsScores[0],
        domSecondPlace: domsScores[1],
        domThirdPlace: domsScores[2],
        scores: domsScores
    }
}