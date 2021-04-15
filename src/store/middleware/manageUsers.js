import {DELETE_USER} from "../actions/adminManagement";
import {auth} from "../../utils/utils";
import {setUsers} from "../actions/admin";

export const manageUsers = () => {
    return store => next => action => {
        switch (action.type) {
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