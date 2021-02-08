// Компонент отображения основного контента сайта.
import React from 'react'
import css from './navigation.module.css'
import { NavLink } from 'react-router-dom'


export class Navigation extends React.Component {

    render() {
        return (
            <div className = {css.wrapper}>
                <NavLink exact to='/' activeClassName={css.active}> Главная</NavLink>
                <NavLink to='/pools' activeClassName={css.active}> Бассейны</NavLink>
                <NavLink to='/blog' activeClassName={css.active}> Блог</NavLink>
                <NavLink to='/forum' activeClassName={css.active}> Форум</NavLink>
            </div>
        )
    }
}


