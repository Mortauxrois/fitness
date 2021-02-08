import { combineReducers } from 'redux'
import { loginReducer } from './loginReducer.js'
import { loginWindowReducer } from './loginWindowReducer.js'
import { mainReducer } from './mainReducer.js'
import { blogReducer } from './blogReducer.js'
import { reducer as formReducer } from 'redux-form'




export const rootReducer = combineReducers({
    login: loginReducer,
    loginWindow: loginWindowReducer,
    main: mainReducer,
    blog: blogReducer,
    form: formReducer,  
})

 