import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {createLogger} from "redux-logger";
import reducers from "./reducers/reducers";
import {gamesMiddleware} from "./middleware/games";

export default function configureStore() {
    const logger = createLogger();

    const middleware = applyMiddleware(...[thunk, gamesMiddleware()]);

    return createStore(reducers, {}, middleware);
}