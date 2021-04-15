import {combineReducers} from "redux";
import {gamesReducer} from './games';
import {basketReducer} from "./basket";
import {authReducer} from "./auth";
import {adminReducer} from "./admin";

export default combineReducers({
    games: gamesReducer,
    basket: basketReducer,
    auth: authReducer,
    admin: adminReducer,
})
