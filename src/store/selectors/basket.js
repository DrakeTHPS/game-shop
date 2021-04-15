export const getBasketSum = (state) => {
    return state.basket.basket.reduce((sum, game) => {
        if (game.discount) {
            return sum + Math.round((game.price / 100) * (100 - game.discount))
        } else {
            return sum + game.price
        }
    }, 0);
}