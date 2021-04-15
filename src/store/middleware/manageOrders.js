import {DELETE_ORDER} from "../actions/adminManagement";
import {auth} from "../../utils/utils";
import {setOrders} from "../actions/admin";

export const manageOrders = () =>{
    return store => next => action =>{
        switch(action.type){
            case DELETE_ORDER:
                fetch("/orders/" + action.payload, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        ...auth()
                    },
                    method: "DELETE",
                }).then(response => {
                        if (response.status === 200) {
                            let orders = store.getState().admin.orders.filter(item => item.id !== action.payload);
                            store.dispatch(setOrders(orders));
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