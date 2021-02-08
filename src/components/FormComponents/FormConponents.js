import React from 'react'
import css from './formComponents.module.css'

export const FormInput = ({input, meta, ...props}) => {
    const tempClass = (meta.error && meta.touched)? css.hasError : '';
    const error = (meta.error && meta.touched)? meta.error : '';
    return(
        <div className = {css.wrapper}>
            <input {...input} {...props}
                   className = {`${tempClass} ${css.inputField}`}/>
            <div className = {css.errorText}>{error}</div>
        </div>
    )
}