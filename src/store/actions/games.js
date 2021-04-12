export const GET_GAMES_ACTION = "GET_GAMES_ACTION";
export const SET_GAMES_ACTION = "SET_GAMES_ACTION";
export const ADD_GAME_ACTION = "ADD_GAME_ACTION";
export const CHANGE_GAME_ACTION = "CHANGE_GAME_ACTION";
export const DELETE_GAME_ACTION = "DELETE_GAME_ACTION";

export const getGames = games =>({
    type: GET_GAMES_ACTION,
    payload: games
})

export const setGames = games =>({
    type: SET_GAMES_ACTION,
    payload: games
})
