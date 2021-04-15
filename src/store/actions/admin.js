export const GET_GENRES_ACTION = 'GET_GENRES_ACTION';
export const SET_GENRES_ACTION = 'SET_GENRES_ACTION';
export const GET_USERS_ACTION = 'GET_USERS_ACTION';
export const SET_USERS_ACTION = 'SET_USERS_ACTION';
export const GET_ORDERS_ACTION = 'GET_ORDERS_ACTION';
export const SET_ORDERS_ACTION = 'SET_ORDERS_ACTION';

export const getGenres = genres =>({
    type: GET_GENRES_ACTION,
    payload: genres
})

export const setGenres = genres =>({
    type: SET_GENRES_ACTION,
    payload: genres
})

export const getUsers = users =>({
    type: GET_USERS_ACTION,
    payload: users
})

export const setUsers = users =>({
    type: SET_USERS_ACTION,
    payload: users
})

export const getOrders = orders =>({
    type: GET_ORDERS_ACTION,
    payload: orders
})

export const setOrders = orders =>({
    type: SET_ORDERS_ACTION,
    payload: orders
})