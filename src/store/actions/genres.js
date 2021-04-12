export const GET_GENRES_ACTION = 'GET_GENRES_ACTION';
export const SET_GENRES_ACTION = 'SET_GENRES_ACTION';

export const getGenres = genres =>({
    type: GET_GENRES_ACTION,
    payload: genres
})

export const setGenres = genres =>({
    type: SET_GENRES_ACTION,
    payload: genres
})