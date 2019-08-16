export const LOAD_USERS = "LOAD_USERS"
export const ADD_USER = "ADD_USER"


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