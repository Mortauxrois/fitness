import {LOGIN_WINDOW_SHOW} from './LoginWindowActions.js'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT = 'LOGOUT'


export function handleLogin(name) {
    return function(dispatch) {
        // Показываем окно логина
        dispatch({
            type: LOGIN_WINDOW_SHOW,
        });
    }
}


// Успешная авторизация
export function handleSuccessLogin(name) {
    return function(dispatch) {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: name,
        });
    }
}