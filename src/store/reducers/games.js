import{SET_GAMES_ACTION} from "../actions/games";

const defaultState = {
    games:[]
}

export const gamesReducer = (state = defaultState, action) =>{
    switch (action.type){
        case SET_GAMES_ACTION:
            return {
                ...state,
                games: action.payload
            }
        default:
            return state;
    }
}