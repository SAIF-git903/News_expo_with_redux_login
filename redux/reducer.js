import { LOGGING_IN, LOG_OUT, SIGNING_UP } from "./action";

const initialState = {
    token: null,
    signedUsers: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGGING_IN:
            return {
                ...state,
                token: action.payload
            }
        case LOG_OUT:
            return {
                ...state,
                token: null
            }
        case SIGNING_UP:
            return {
                ...state,
                signedUsers: [...state.signedUsers, action.payload]
            }
        default:
            return state;
    }
}