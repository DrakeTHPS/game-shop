import {SET_GENRES_ACTION, SET_ORDERS_ACTION, SET_USERS_ACTION} from "../actions/admin";

const defaultState = {
    genres: [],
    users: [],
    orders: [],
}

export const adminReducer = (state = defaultState, action) =>{
    switch (action.type){
        case SET_GENRES_ACTION:
            return {
                ...state,
                genres: action.payload
            }
        case SET_USERS_ACTION:
            return {
                ...state,
                users: action.payload
            }
        case SET_ORDERS_ACTION:
            return {
                ...state,
                orders: action.payload
            }
        default:
            return state;
    }
}