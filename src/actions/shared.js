import { _getQuestions, _getUsers } from '../_DATA'
import { showLoading } from 'react-redux-loading'
import { loadQuestions } from './questions'
import { loadUsers } from './users'
import { setAuthedUser } from './authedUser'
import { getDataFromBackend } from '../utils/getData'



const authedUserId = "tylermcginnis"

export function loadData() {
    return (dispatch) => {
        return getDataFromBackend()
            .then( (usersAndQuestions) => {
                dispatch(loadQuestions(usersAndQuestions.questions))
                dispatch(loadUsers(usersAndQuestions.users))
                dispatch(setAuthedUser(authedUserId))
            })       
    }
}

