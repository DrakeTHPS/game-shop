import {GET_GAMES_ACTION} from "./games";

export const setBasket = basket =>({
    type: GET_GAMES_ACTION,
    payload: basket
})