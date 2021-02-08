export const GET_FITNESS_CENTERS = 'GET_FITNESS_CENTERS'


// Успешная авторизация
export function handleSuccessQuery(d) {
    return function(dispatch) {
        dispatch({
            type: GET_FITNESS_CENTERS,
            payload: d,
        });
    }
}