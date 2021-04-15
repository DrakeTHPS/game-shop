import {GET_GENRES_ACTION, GET_ORDERS_ACTION, GET_USERS_ACTION, setGenres, setOrders, setUsers} from "../actions/admin";
import {auth} from "../../utils/utils";

export const adminMiddleware = () => {
    return store => next => action => {
        switch (action.type) {
            case GET_GENRES_ACTION:
                fetch("/genres", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        ...auth()
                    },
                    method: "GET",
                })
                    .then(response => response.json())
                    .then(jsonData => store.dispatch(setGenres(jsonData)));
                break;
            case GET_USERS_ACTION:
                fetch("/users", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        ...auth()
                    },
                    method: "GET",
                })
                    .then(response => response.json())
                    .then(jsonData => store.dispatch(setUsers(jsonData)));
                break;
            case GET_ORDERS_ACTION:
                fetch("/orders", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        ...auth()
                    },
                    method: "GET",
                })
                    .then(response => response.json())
                    .then(jsonData => store.dispatch(setOrders(jsonData)));
                break;
        }
        next({
            type: action.type,
            payload: action.payload
        })
    }
}