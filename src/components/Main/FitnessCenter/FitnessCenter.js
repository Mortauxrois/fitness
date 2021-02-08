// Компонент отображения основного контента сайта.
import React from 'react'
import PropTypes from 'prop-types'
import css from './fitnessCenter.module.css'

export class FitnessCenter extends React.Component {
    render() {
        const {name, description, site, preview, addr_array} = this.props;
        let address_template = addr_array.map(a=>{
            const telephone = (a.telephone != 0)? `+${a.telephone}`: '';
            return <div>
                    <a className = {css.addressLink}
                       href = {a.map_link}
                       target="_blank">
                           {a.address}
                    </a>
                    <p className = {css.telephone}>{telephone}</p>
                 </div>
        });
        return (
            <div className = {css.wrapper}>
                <div>
                    <img className={css.logo} 
                         src = {preview}>
                    </img>
                </div>
                <div>
                    <a className={css.name}
                       target="_blank"
                       href = {site}>{name}</a>
                    <p className={css.description}>{description}</p>
                    {address_template}
                </div>
            </div>
        )
    }
}


FitnessCenter.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    preview: PropTypes.string,
}