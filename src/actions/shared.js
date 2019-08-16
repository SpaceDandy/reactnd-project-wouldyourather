import { _getQuestions, _getUsers } from '../_DATA'
import { showLoading } from 'react-redux-loading'
import { loadQuestions } from './questions'
import { loadUsers } from './users'
import { getDataFromBackend } from '../utils/getData'


// TODO make utils files

export function loadData() {
    return (dispatch) => {
        getDataFromBackend()
            .then( (usersAndQuestions) => {
                dispatch(loadQuestions(usersAndQuestions.questions))
                dispatch(loadUsers(usersAndQuestions.users))
            })       
    }
}

