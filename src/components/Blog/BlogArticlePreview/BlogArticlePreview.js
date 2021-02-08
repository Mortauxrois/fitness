// Компонент отображения основного контента сайта.
import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import css from './blogArticlePreview.module.css'

export class BlogArticlePreview extends React.Component {
    render() {
        const {id, header, description, preview, date} = this.props;
        return (
            <div className = {css.wrapper}
                    onClick={this.props.onClick}>
                    <NavLink to={"blog/" + id}>
                        <img className={css.preview} 
                                src = {preview}
                                alt = {description}>
                        </img>
                        <h2 className = {css.articleHeader}>{header}</h2>
                        <p className={css.description}>{description}</p>
                        <p className = {css.date}> {date}</p>
                    </NavLink> 
            </div>

        )
    }
}


BlogArticlePreview.propTypes = {
    id: PropTypes.number,
    header: PropTypes.string,
    preview: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
}