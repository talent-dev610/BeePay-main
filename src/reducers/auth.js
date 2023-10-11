import {
    AUTH_LOGIN,
    AUTH_LOGOUT
} from "../constants/auth";

const INITIAL_AUTH = {
    user: null
}

export default function (state = INITIAL_AUTH, action) {
    switch (action.type) {
        case AUTH_LOGIN: {
            return {
                ...state,
                user: action.payload
            }
        }
        default:
            return state;
    }
}