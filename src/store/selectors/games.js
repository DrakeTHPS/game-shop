const sortBySales = (a, b) => {
    if (a.sold > b.sold) {
        return -1;
    }
    if (a.sold < b.sold) {
        return 1;
    }
    return 0;
}

const sortByDate = (a, b) => {
    if (a.releaseDate > b.releaseDate) {
        return -1;
    }
    if (a.releaseDate < b.releaseDate) {
        return 1;
    }
    return 0;
}

export const getBestGames = (state, count) =>{
    return state.games.games.slice().sort((a,b)=>sortBySales(a,b)).slice(0,count)
}

export const getNewGames = (state) =>{
    return state.games.games.slice().sort((a,b)=>sortByDate(a,b)).slice(0,10)
}

export const getDiscounts = (state) => {
    return state.games.games.slice().filter(game=>game.discount!=null).slice(0,10)
}
