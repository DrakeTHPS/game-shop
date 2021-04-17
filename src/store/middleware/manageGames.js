import {auth} from "../../utils/utils";
import {ADD_NEW_GAME, DELETE_GAME, EDIT_GAME} from "../actions/adminManagement";
import {setGames} from "../actions/games";

export const manageGames = () => {
    return store => next => action => {
        switch (action.type) {
            case ADD_NEW_GAME:
                fetch("/games/", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        ...auth()
                    },
                    method: "POST",
                    body: JSON.stringify(action.payload)
                }).then(response => {
                        if (response.status === 201) {
                            return response.json();
                        } else {
                            throw new Error("Не удалось добавить")
                        }
                    }
                ).then(jsonData => {
                    let games = store.getState().games.games.slice();
                    games.push(jsonData);
                    store.dispatch(setGames(games));
                }).catch((error) => alert(error.message))
                break;
            case EDIT_GAME:
                fetch("/games/" + action.payload.id, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        ...auth()
                    },
                    method: "PUT",
                    body: JSON.stringify(action.payload)
                }).then(response => {
                        if (response.status === 200) {
                            let games = store.getState().games.games.slice();
                            let changedGames = games.map(game =>
                                game.id === action.payload.id ?
                                    action.payload : game
                            )
                            store.dispatch(setGames(changedGames));
                        } else {
                            alert("Не удалось изменить")
                        }
                    }
                )
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