export const ADD_NEW_GAME = 'ADD_NEW_GAME';
export const EDIT_GAME = 'EDIT_GAME';
export const DELETE_GAME = 'DELETE_GAME';

export const ADD_NEW_USER = 'ADD_NEW_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';

export const DELETE_ORDER = 'DELETE_ORDER';

export const addGame = game => ({
    type: ADD_NEW_GAME,
    payload: game
})

export const editGame = game => ({
    type: EDIT_GAME,
    payload: game
})

export const deleteGame = game => ({
    type: DELETE_GAME,
    payload: game
})


export const addUser = user => ({
    type: ADD_NEW_USER,
    payload: user
})

export const editUser = user => ({
    type: EDIT_USER,
    payload: user
})

export const deleteUser = user =>({
    type: DELETE_USER,
    payload: user
})


export const deleteOrder = order =>({
    type: DELETE_ORDER,
    payload: order
})
