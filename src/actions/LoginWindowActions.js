export const LOGIN_WINDOW_SHOW = 'LOGIN_WINDOW_SHOW'
export const REGISTER_WINDOW_SHOW = 'REGISTER_WINDOW_SHOW'
export const WINDOW_HIDE = 'WINDOW_HIDE'


export function showLoginWindow() {
    return function(dispatch) {
        // Отправляем действие запрос авторизации
        dispatch({
            type: LOGIN_WINDOW_SHOW
        });
    }
}


export function showRegisterWindow() {
    return function(dispatch) {
        dispatch({
            type: REGISTER_WINDOW_SHOW
        });
    }
}


export function hideLoginWindow() {
    return function(dispatch) {
        dispatch({
            type: WINDOW_HIDE,
        });
    }
}