import {combineReducers} from "redux";
import {gamesReducer} from './games';
import {basketReducer} from "./basket";

export default combineReducers({
    games: gamesReducer,
    basket: basketReducer
})
