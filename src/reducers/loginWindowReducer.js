import { LOGIN_WINDOW_SHOW, REGISTER_WINDOW_SHOW, WINDOW_HIDE} from '../actions/LoginWindowActions.js'


const initialState = {
    isWindowVisible: false,
    isLoginVisible: false,
    isRegisterVisible: false,
}


// Редьюсер - меняет состояние
export function loginWindowReducer(state = initialState, action) {
    switch (action.type) {
    case LOGIN_WINDOW_SHOW:
        return { ...state, isWindowVisible: true, isLoginVisible: true, isRegisterVisible: false }
    case REGISTER_WINDOW_SHOW:
        return { ...state, isWindowVisible: true, isLoginVisible: false, isRegisterVisible: true }
    case WINDOW_HIDE:
        return { ...state, isWindowVisible: false, isLoginVisible: false, isRegisterVisible: false }
    default:
        return state
    }
}


