import {combineReducers} from "redux";
import {gamesReducer} from './games';
import {basketReducer} from "./basket";
import {authReducer} from "./auth";
import {genresReducer} from "./genres";

export default combineReducers({
    games: gamesReducer,
    basket: basketReducer,
    auth: authReducer,
    genres:genresReducer,
})
