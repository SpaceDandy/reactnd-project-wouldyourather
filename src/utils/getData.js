import { _getQuestions, _getUsers } from '../_DATA'


export function getDataFromBackend() {
    return Promise.all([
        _getQuestions(),
        _getUsers(),
    ]).then(([questions, users]) => ({
        users,
        questions,
    }));
}
