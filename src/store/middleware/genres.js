import {GET_GENRES_ACTION, setGenres} from "../actions/genres";

export const genresMiddleware = () => {
    return store => next => action => {
        switch (action.type) {
            case GET_GENRES_ACTION:
                fetch("/genres")
                    .then(response => response.json())
                    .then(jsonData => store.dispatch(setGenres(jsonData)));
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}