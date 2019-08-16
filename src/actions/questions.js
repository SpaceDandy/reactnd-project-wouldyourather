export const LOAD_QUESTIONS = "LOAD_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"


export function loadQuestions(questions) {
    return {
            type: LOAD_QUESTIONS,
            questions
        }
}

export function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}