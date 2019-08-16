import { ADD_QUESTION, LOAD_QUESTIONS } from '../actions/questions';

export default function questions(state = {}, action) {
    switch (action.type){
        case ADD_QUESTION:
            return (
                {
                    ...state,
                    [action.question.id] : action.question
                }
            );
        case LOAD_QUESTIONS:
            return (
                {
                    ...action.questions
                }
            );
        default :
            return state
    }
}