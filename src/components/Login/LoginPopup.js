// Компонент отображения и ввода логина.
import React from 'react'
import { connect } from 'react-redux';
import { hideLoginWindow } from '../../actions/LoginWindowActions.js'
import {showRegisterWindow} from '../../actions/LoginWindowActions.js'
import {handleSuccessLogin} from '../../actions/LoginActions.js'
import PropTypes from 'prop-types'



class LoginPopup extends React.Component {
    constructor(props){
        super(props);
        this.name = React.createRef();
        this.login = React.createRef();
        this.password = React.createRef();
        this.password_confirm = React.createRef();
        this.telephone = React.createRef();
    }

    onCloseBtn = (e) =>{
        this.props.dispatch(hideLoginWindow());
    }

    onShowRegisterBtn = (e) =>{
        this.props.dispatch(showRegisterWindow());
    }


    onSubmitLogin = (e) => {
        fetch('http://forker.beget.tech/login',
            {method: 'post',
             headers: {
                        'Content-Type': 'application/json;charset=utf-8'},
             body: JSON.stringify({login: this.login.current.value,
                                   password: this.password.current.value})}
        )
            .then(response => response.json())
            .then(data => {
                this.handleResponseLogin(data);
            });
    }


    onSubmitRegister = (e) => {
        if(this.password.current.value != this.password_confirm.current.value){
            alert('Пароли не совпадают');
            return;
        }
        fetch('http://forker.beget.tech/register',
            {method: 'post',
             headers: {
                        'Content-Type': 'application/json;charset=utf-8'},
             body: JSON.stringify({login: this.login.current.value,
                                   password: this.password.current.value,
                                   name: this.name.current.value,
                                   telephone: this.telephone.current.value})}
        )
            .then(response => response.json())
            .then(data => {
                this.handleResponseRegister(data);
            }); 
    }


    handleResponseLogin = (r) => {
        if(r.access == 'ok'){
            this.props.dispatch(handleSuccessLogin(r.name));
            this.props.dispatch(hideLoginWindow());
        } else {
            alert('Неверные логин или пароль');
        }
    }

    handleResponseRegister = (r) => {
        console.log(r.response);
        if(r.response == 'user created'){
            this.props.dispatch(handleSuccessLogin(r.name));
            this.props.dispatch(hideLoginWindow());            
        } else {
            alert('Пользователь с таким именем уже существует');            
        }
    }




    render() {
        const {isVisible, isLoginVisible, isRegisterVisible} = this.props;
        const showPopup = (isVisible)? '': 'none ';
        const showLogin = (isLoginVisible)? '': 'none ';
        const showRegister = (isRegisterVisible)? '': 'none ';
        return (
            <form className = {'popupOverlay ' + showPopup}
                  action = "login"
                  onSubmit = {this.onSubmitForm}>
                <div className = 'loginPopup'>
                    <button
                        className = 'loginPopup-closeBtn'
                        type = 'button' 
                        onClick = {this.onCloseBtn}>
                        X</button>
                    <label>Логин: </label>
                    <input className = 'loginPopup-text'
                            ref = {this.login} 
                            type="text" />
                    <label className = {showRegister}>Имя на сайте: </label>
                    <input className = {'loginPopup-text ' + showRegister}
                            ref = {this.name} 
                            type="text" />
                    <label>Пароль: </label>
                    <input className = 'loginPopup-text'
                            ref={this.password}
                            type="text" />
                    <label className = {showRegister}>Повторите пароль: </label>
                    <input className = {'loginPopup-text ' + showRegister}
                            ref={this.password_confirm}
                            type="text" />
                    <label className = {showRegister}>Телефон: </label>
                    <input className = {'loginPopup-text ' + showRegister}
                            ref = {this.telephone} 
                            type="text" />
                    <button type = 'button'
                            className = {'loginPopup-loginBtn ' + showLogin}
                            onClick = {this.onSubmitLogin}>
                            Войти </button>
                    <button type = 'button'
                            className = {'loginPopup-registerBtn ' + showRegister}
                            onClick = {this.onSubmitRegister}>
                            Зарегистрироваться </button>
                    <button type = 'button'
                            className = {'loginPopup-showRegisterBtn ' + showLogin}
                            onClick = {this.onShowRegisterBtn}>
                            Если у вас нет аккаунта, <br />
                            зарегистрируйтесь </button>

                </div>
            </form>
        )
    }
}


export default connect()(LoginPopup);


LoginPopup.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    isLoginVisible: PropTypes.bool.isRequired,
    isRegisterVisible: PropTypes.bool.isRequired,
}