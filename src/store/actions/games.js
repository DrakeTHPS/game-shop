export const GET_GAMES_ACTION = "GET_GAMES_ACTION";
export const SET_GAMES_ACTION = "SET_GAMES_ACTION";

export const getGames = games =>({
    type: GET_GAMES_ACTION,
    payload: games
})

export const setGames = games =>({
    type: SET_GAMES_ACTION,
    payload: games
})