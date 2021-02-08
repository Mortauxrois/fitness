// Компонент отображения и ввода логина.
import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

export class User extends React.Component {

    render() {
        const { userName, logedIn, onClickHandler } = this.props
        let loginedClass = (logedIn)? "logined" : "not_logined";
        return (
            <div className = {'loginButtonWrapper ' +  loginedClass}
                 onClick = {onClickHandler}>
               <NavLink to='/login' className = "userNameText"> {userName} </NavLink> 
            </div>
        )
    }
}


User.propTypes = {
    userName: PropTypes.string.isRequired,
    logedIn: PropTypes.bool.isRequired,
    onClickHandler: PropTypes.func.isRequired,
}