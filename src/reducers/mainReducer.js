import { GET_FITNESS_CENTERS } from '../actions/mainActions.js'


const initialState = {
    fitness_centers: []
}


export function mainReducer(state = initialState, action) {

    switch (action.type) {
    case GET_FITNESS_CENTERS:
        return { ...state, fitness_centers: action.payload }
    default:
        return state
    }
}


