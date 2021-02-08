import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {checkLogin} from '../../reducers/loginReducer.js'
import {isEmptyValidator, lengthValidator} from '../../validators/loginValidators.js'
import {FormInput} from '../../components/FormComponents/FormConponents.js'
import css from './login.module.css'


let Login = (props) => {
    const onSubmitLogin = (v) =>{
        props.checkLogin(v.login, v.password);
    }
    return(
        <div>
            {(props.isAuth === false)?
                <LoginForm onSubmit={onSubmitLogin} commonError = {props.error}/>
                : <div>Вы зашли как {props.userName}</div>
            }
        </div>
    )
}


let LoginForm = (props) => {
    return(
        <form className = {css.wrapper} onSubmit={props.handleSubmit}>
            <label className = {css.header}> Войдите в аккаунт</label>
            <Field name="login"
                   component={FormInput}
                   type="text"
                   placeholder="логин"
                   validate={[isEmptyValidator, lengthValidator]}/>
            <Field name="password"
                   component={FormInput}
                   type="text"
                   placeholder="пароль"
                   validate={[isEmptyValidator, lengthValidator]}/>
            <p className = {css.errorText}>{props.commonError}</p>
            <button className = {css.loginButton}>Войти</button>
        </form>
    )
}

LoginForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = state => {
    return {
        error: state.login.error,
        isAuth: state.login.logedIn,
        userName: state.login.userName,
    }
}

export default connect(mapStateToProps, {checkLogin})(Login);