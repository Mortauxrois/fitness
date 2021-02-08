// Компонент отображения основного контента сайта.
import React from 'react'
import PropTypes from 'prop-types'
import css from './forum.module.css'


export class Forum extends React.Component {

    render() {
        return (
            <div className = {css.wrapper}>
               <p> Форум </p>
            </div>
        )
    }
}


Forum.propTypes = {

}