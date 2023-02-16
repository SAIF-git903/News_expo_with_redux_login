export const LOGGING_IN = "LOGGING_IN"
export const LOG_OUT = "LOG_OUT"
export const SIGNING_UP = "SIGNING_UP"

let userId = 0

////////////---LOGED_IN_USER---/////////////////
export const loggingIn = user => ({
    type: LOGGING_IN,
    payload: {
        id: ++userId,
        user
    }
})

////////////---LOGED_OUT_USER---/////////////////
export const logOut = () => ({
    type: LOG_OUT,
})

////////////---SIGNING_USERS---/////////////////
export const signigUsers = (usersData) => ({
    type: SIGNING_UP,
    payload: {
        id: ++userId,
        usersData
    }
})