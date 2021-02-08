import { GET_BLOG_ARTICLES, FETCH_ARTICLE, ARTICLE_LOADED } from '../actions/blogActions.js'
import { fetchBlogArticle } from '../apiRequests.js' 


const initialState = {
    blog_articles: [],
    article: {},
    isArticleFetching: false,
}


export function blogReducer(state = initialState, action) {
    switch (action.type) {
    case GET_BLOG_ARTICLES:
        return { ...state, blog_articles: action.payload }
    case FETCH_ARTICLE:
        return { ...state, isArticleFetching: action.payload }
    case ARTICLE_LOADED:
        return { ...state, article: action.payload }
    default:
        return state
    }
}


// API запрос на получение полного текста статьи
export const getArticle = (id) => {
    return async (dispatch) => {
        try{
            dispatch({type: FETCH_ARTICLE, payload: true});
            const response = await fetchBlogArticle(id);
            const data = await response.json();
            dispatch({type: FETCH_ARTICLE, payload: false});
            dispatch({type: ARTICLE_LOADED, payload: data});
        } catch(err) {
            alert(err);
        }
    }
}


