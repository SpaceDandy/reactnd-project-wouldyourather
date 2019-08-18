export const LOAD_QUESTIONS = "LOAD_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"
export const ADD_ANSWER = "ADD_ANSWER"
export const RESET_ANSWER = "RESET_ANSWER"

export function resetAnswer( qid, optionKey, uid ){
    return {
        type : RESET_ANSWER,
        qid,
        optionKey,
        uid,
    }
}
export function addAnswer(qid, optionKey, uid){
    return {
        type : ADD_ANSWER,
        qid,
        optionKey,
        uid,
    }
}
export function loadQuestions(questions) {
    return {
        type: LOAD_QUESTIONS,
        questions
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}