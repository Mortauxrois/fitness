import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import BlogArticle from './BlogArticle.js'
import {getArticle} from '../../../reducers/blogReducer.js'

class BlogArticleContainer extends React.Component {
    render(){
        return(
            <BlogArticle
                id = {this.props.match.params.id}
                article = {this.props.article}
                isArticleFetching = {this.props.isArticleFetching}
                getArticle = {this.props.getArticle}            
            />
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isArticleFetching: state.blog.isArticleFetching,
        article: state.blog.article,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticle: d => dispatch(getArticle(d)),
    };
}


withRouter(BlogArticleContainer);
export default connect(mapStateToProps, mapDispatchToProps)(BlogArticleContainer);
