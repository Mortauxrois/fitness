import React from 'react'
import Parser from 'html-react-parser';
import css from './blogArticle.module.css'
import './blogArticle.css'
import loadingPic from '../../../assets/img/loading.gif'


class BlogArticle extends React.Component{
    render(){
        let content = this.props.article.text? Parser(this.props.article.text) : ''; 
        let date = (this.props.article.date)? this.props.article.date.match(/\d{4}-\d{2}-\d{2}/) : '';
        return(
            <div className = {css.wrapper}>
                {this.props.isArticleFetching?
                    <div>
                        <img className={css.loadingImg} src={loadingPic}></img>
                        <p>Загружаю...</p>
                    </div>
                : <div>
                    <div>
                        <h1 >{this.props.article.header}</h1>
                    </div>
                    <div>
                        <img className = {css.headImg} 
                             src = {this.props.article.preview}></img>
                    </div>
                    <div className = {css.articleContent}>
                        {content}
                    </div>
                    <div className = {css.date}>
                        {date}
                    </div>
                 </div>
                }
            </div>
        );
    }

    componentDidMount(){
        this.props.getArticle(this.props.id);
    }
}

export default BlogArticle;