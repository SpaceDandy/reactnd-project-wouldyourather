export const LOAD_USERS = "LOAD_USERS"
export const ADD_USER = "ADD_USER"
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER"
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER"


export function loadUsers(users) {
    return {
            type: LOAD_USERS,
            users
        }
}

export function addUser(user){
    return {
        type: ADD_USER,
        user
    }
}

export function addAnswerToUser(uid, qid, answer){
    return {
        type : ADD_ANSWER_TO_USER,
        uid,
        qid,
        answer,
    }
}

export function addQuestionToUser(uid, qid){
    return {
        type : ADD_QUESTION_TO_USER,
        uid,
        qid
    }
}