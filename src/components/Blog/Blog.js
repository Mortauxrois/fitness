// Компонент отображения основного контента сайта.
import React from 'react'
import { connect } from 'react-redux'
import { handleSuccessFetchBlog } from '../../actions/blogActions.js'
import { fetchBlog } from '../../apiRequests.js'
import {BlogArticlePreview} from './BlogArticlePreview/BlogArticlePreview.js'
import ym from 'react-yandex-metrika';
import css from './blog.module.css'

class Blog extends React.Component {
    render() {
        const b = this.props.blog_articles;
        let blog_articles_previews_template;
        if(b.length > 0){
            blog_articles_previews_template = b.map( (article, i) =>{
                let article_formated_date = article.date.match(/\d{4}-\d{2}-\d{2}/);
                return  <BlogArticlePreview 
                                       key = {article.id}
                                       id = {article.id}
                                       preview = {article.preview}
                                       header = {article.header}
                                       description = {article.description}
                                       date = {article_formated_date}
                                       onClick = {this.onArticleClick}/>
            });
        }

        return (
            <div className = {css.wrapper}>
               <h1> Наш блог </h1>
               <div className = {css.articlesWrapper}>
                    {blog_articles_previews_template}
               </div>
            </div>
        )
    }


    async componentDidMount(){
        ym('hit', '/blog');
        try{
            const response = await fetchBlog(0, 0);
            const data = await response.json();
            this.props.handleSuccessFetchBlog(data);  
        } catch(err) {
            alert(err);
        }
    }

}


const mapStateToProps = state => {
    return {
        blog_articles: state.blog.blog_articles
    }
}


const mapDispatchToProps = dispatch => {
    return {
        handleSuccessFetchBlog: d => dispatch(handleSuccessFetchBlog(d))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Blog)