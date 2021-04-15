import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers/reducers";
import {gamesMiddleware} from "./middleware/games";
import {adminMiddleware} from "./middleware/admin";

export default function configureStore() {

    const middleware = applyMiddleware(...[thunk, gamesMiddleware(), adminMiddleware()]);

    return createStore(reducers, {}, middleware);
}