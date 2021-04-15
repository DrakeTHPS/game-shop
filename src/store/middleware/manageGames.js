import {auth} from "../../utils/utils";
import {ADD_NEW_GAME, DELETE_GAME, EDIT_GAME} from "../actions/adminManagement";
import {setGames} from "../actions/games";

export const manageGames = () => {
    return store => next => action => {
        switch (action.type) {
            case ADD_NEW_GAME:
                break;
            case EDIT_GAME:
                break;
            case DELETE_GAME:
                fetch("/games/" + action.payload, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        ...auth()
                    },
                    method: "DELETE",
                }).then(response => {
                        if (response.status === 200) {
                            let games = store.getState().games.games.filter(item => item.id !== action.payload);
                            store.dispatch(setGames(games));
                        } else {
                            alert("Не удалось удалить")
                        }
                    }
                )
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}