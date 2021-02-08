export const GET_BLOG_ARTICLES = 'GET_BLOG_ARTICLES'
export const FETCH_ARTICLE = 'FETCH_ARTICLE'
export const ARTICLE_LOADED = 'ARTICLE_LOADED'


export function handleSuccessFetchBlog(array_of_articles_from_server) {
    return function(dispatch) {
        dispatch({
            type: GET_BLOG_ARTICLES,
            payload: array_of_articles_from_server,
        });
    }
}