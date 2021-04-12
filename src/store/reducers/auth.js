import{SET_ROLE_ACTION} from "../actions/auth";
import {ANONYMOUS} from "../../utils/consts";

const defaultState = {
    role: sessionStorage.getItem("jwt") ? JSON.parse(sessionStorage.getItem("jwt")).roles[0] : ANONYMOUS
}

export const authReducer = (state = defaultState, action) =>{
    switch (action.type){
        case SET_ROLE_ACTION:
            return {
                ...state,
                role: action.payload
            }
        default:
            return state;
    }
}