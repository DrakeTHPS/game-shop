import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers/reducers";
import {gamesMiddleware} from "./middleware/games";
import {genresMiddleware} from "./middleware/genres";

export default function configureStore() {

    const middleware = applyMiddleware(...[thunk, gamesMiddleware(), genresMiddleware()]);

    return createStore(reducers, {}, middleware);
}