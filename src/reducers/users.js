import { ADD_USER, LOAD_USERS,
     ADD_QUESTION_TO_USER, ADD_ANSWER_TO_USER } from '../actions/users';


export default function users(state = {}, action) {
    switch (action.type){
        case ADD_USER:
            return ({
                ...state,
                [action.user.id] : action.user
            })
        case LOAD_USERS:
            return ({
                ...action.users
            })
        case ADD_QUESTION_TO_USER:
            return ({
                ...state,
                [action.uid] : {
                    ...state[action.uid],
                    questions : state[action.uid].questions.concat(action.qid)
                }
            })
        case ADD_ANSWER_TO_USER:
            return ({
                ...state,
                [action.uid] : {
                    ...state[action.uid],
                    answers : {
                        ...state[action.uid].answers,
                        [action.qid] : action.answer
                    }
                }

            })
        default :
            return state
        }
    }