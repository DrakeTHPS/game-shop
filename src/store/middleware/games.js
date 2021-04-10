import {GET_GAMES_ACTION, setGames} from "../actions/games";

export const gamesMiddleware = () => {
    return store => next => action => {
        switch (action.type) {
            case GET_GAMES_ACTION:
                fetch("http://localhost:8080/games")
                    .then(response => response.json())
                    .then(jsonData => store.dispatch(setGames(jsonData)));
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}