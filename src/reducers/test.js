import {
    ADD_TESTS,
    ADD_ANSWERS,
    CURRENT_TEST,
    CURRENT_ANSWERS,
    QUESTION_STATE,TEST_STATE,
    GET_DIFFICULTY,
} from '../actions/constants'

const initState = {
    tests: [],
    questions: [],
    answers: [],
    current: {
        currentQuestion:0,
        currentSubquestion: 0
    },
    previous: {
        currentQuestion:0,
        currentSubquestion: 0
    },
}
export default (state = initState, action) => {
    switch (action.type) {
        case ADD_TESTS:
            return {
                ...state,
                tests: action.tests
            };
        case ADD_ANSWERS:
            if(!!state.answers.questions[action.currentQuestion].questionSet){
                console.log('inside redux')
                state.answers.questions[action.currentQuestion].questionSet[action.currentSubquestion].answer.option = action.answer;
                state.answers.questions[action.currentQuestion].questionSet[action.currentSubquestion].answer.optionNumber = action.answerNumber;
            }
            else{
                state.answers.questions[action.currentQuestion].answer.option = action.answer;
                state.answers.questions[action.currentQuestion].answer.optionNumber = action.answerNumber;
            }
            return state;
        case CURRENT_ANSWERS:
            return {
                ...state,
                answers: action.answers
            }
        case GET_DIFFICULTY:
            state.answers.userDifficulty = action.difficulty;
            return state;
        case CURRENT_TEST:
            return {
                ...state,
                questions: action.questions
            }

        default:
            return state;
    }
};