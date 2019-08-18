import { ADD_QUESTION, LOAD_QUESTIONS, 
    ADD_ANSWER, RESET_ANSWER } from '../actions/questions';

export default function questions(state = {}, action) {
    switch (action.type){
        case RESET_ANSWER:
            return ({
                ...state,
                [action.qid] : {
                    ...state[action],
                    ...state[action.qid][action.optionKey].votes.filter( (userId) => (userId !== action.uid))
                }
            })
        case ADD_ANSWER:
            const options = state[action.qid][action.optionKey].votes.concat(action.uid)
            return ({
                ...state,
                [action.qid] : {
                    ...state[action.qid],
                    [action.optionKey] : { 
                        ...state[action.qid][action.optionKey],
                        votes : options
                    }    
                }
            });
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