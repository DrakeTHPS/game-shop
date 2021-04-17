import {ADD_NEW_USER, DELETE_USER, EDIT_USER} from "../actions/adminManagement";
import {auth} from "../../utils/utils";
import {setUsers} from "../actions/admin";
import {setGames} from "../actions/games";

export const manageUsers = () => {
    return store => next => action => {
        switch (action.type) {
            case ADD_NEW_USER:
                fetch("/users/", {
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
                    let users = store.getState().admin.users.slice();
                    users.push(jsonData);
                    store.dispatch(setUsers(users));
                }).catch((error) => alert(error.message))
                break;
            case EDIT_USER:
                fetch("/users/" + action.payload.id, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        ...auth()
                    },
                    method: "PUT",
                    body: JSON.stringify(action.payload)
                }).then(response => {
                        if (response.status === 200) {
                            let users = store.getState().admin.users.slice();
                            let changedUsers = users.map(game =>
                                game.id === action.payload.id ?
                                    action.payload : game
                            )
                            store.dispatch(setUsers(changedUsers));
                        } else {
                            alert("Не удалось изменить")
                        }
                    }
                )
                break;
            case DELETE_USER:
                fetch("/users/" + action.payload, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        ...auth()
                    },
                    method: "DELETE",
                }).then(response => {
                        if (response.status === 200) {
                            let users = store.getState().admin.users.filter(item => item.id !== action.payload);
                            store.dispatch(setUsers(users));
                        } else {
                            alert("Не удалось удалить")
                        }
                    }
                )
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}