import {SET_GENRES_ACTION} from "../actions/genres";

const defaultState = {
    genres: [],
}

export const genresReducer = (state = defaultState, action) =>{
    switch (action.type){
        case SET_GENRES_ACTION:
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state;
    }
}