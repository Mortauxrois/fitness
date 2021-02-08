import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/LoginActions.js'
import {fetchLogin} from '../apiRequests.js'

const initialState = {
    userName: 'Войти',
    logedIn: false,
    error: ''
}


// Редьюсер - меняет состояние
export function loginReducer(state = initialState, action) {

    switch (action.type) {
    case LOGIN_REQUEST:
        return state
    case LOGIN_SUCCESS:
        return { ...state, userName: action.payload, logedIn: true, error: '' }
    case LOGIN_FAIL:
        return { ...state, userName: "Войти", error: action.payload, logedIn: false }
    case LOGOUT:
        return { ...state, userName: "Войти", logedIn: false, error: '' }
    default:
        return state
    }
}


// API запрос для логина
export const checkLogin = (login, password) => {
    return async (dispatch) => {
        try{
            dispatch({type: LOGIN_REQUEST});
            const response = await fetchLogin(login, password);
            const data = await response.json();
            if(data.access == "ok"){
                dispatch({type: LOGIN_SUCCESS, payload: data.name});
            } else {
                dispatch({type: LOGIN_FAIL, payload: "Неправильный логин или пароль"});
            }

        } catch(err) {
            dispatch({type: LOGIN_FAIL, payload: "Ошибка соединения"});
        }
    }
}


