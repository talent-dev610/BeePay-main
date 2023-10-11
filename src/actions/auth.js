import { authService } from "../services/authService";

import {
    AUTH_LOGIN,
    AUTH_LOGOUT
} from '../constants/auth';

export const login = (email, password) => async (dispatch) => {

    authService.login(email, password)
        .then(async (res) => {
            await dispatch(saveUser(res));

        })
        .catch((error) => {

        })
        .finally(async () => {

        });
}

export const saveUser = (newUser) => ({
    type: AUTH_LOGIN,
    payload: newUser
})

export const clearUser = () => ({
    type: AUTH_LOGOUT
})