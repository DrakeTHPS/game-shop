import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers/reducers";
import {gamesMiddleware} from "./middleware/games";
import {adminMiddleware} from "./middleware/admin";
import {manageOrders} from "./middleware/manageOrders";
import {manageUsers} from "./middleware/manageUsers";
import {manageGames} from "./middleware/manageGames";

export default function configureStore() {

    const middleware = applyMiddleware(...[thunk, gamesMiddleware(), adminMiddleware(), manageOrders(), manageUsers(), manageGames()]);

    return createStore(reducers, {}, middleware);
}