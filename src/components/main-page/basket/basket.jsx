import React from 'react';
import {connect} from "react-redux";
import {setBasket} from "../../../store/actions/basket";
import BasketItem from "./basket-item/basket-item";
import styles from './basket.module.css'
import {useHistory} from 'react-router';
import {getBasketSum} from "../../../store/selectors/basket";
import {auth} from "../../../utils/utils";

const Basket = (props) => {
    const history = useHistory();

    const deleteFromBasket = (game) => {
        let newBasket = props.basket.filter(item => item !== game);
        props.setBasket(newBasket);
        if (newBasket.length === 0)
            history.push("/")
    }

    const buyGames = () => {
        fetch("/orders", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...auth()
            },
            method: "POST",
            body: JSON.stringify(props.basket)
        })
            .then(response => {
                if (response.status === 201) {
                    alert("Заказ успешно выполнен! Спасибо за покупку!")
                    props.setBasket([]);
                    history.push("/");
                } else {
                    alert("Something went wrong");
                }
            })
    }
    return (
        <div className={`content ${styles.basket}`}>
            <h2>ВАША КОРЗИНА</h2>
            {props.basket && props.basket.map(game => <BasketItem game={game} deleteFunc={deleteFromBasket}/>)}
            <div className={styles.checkout}>
                <div className={styles.total}><span>Общая сумма</span><span>{props.basketSum} руб.</span></div>
                <button className={`buyButton ${styles.checkoutButton}`} onClick={buyGames}>Купить</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basket: state.basket.basket,
    basketSum: getBasketSum(state)
})

const mapDispatchToProps = dispatch => {
    return {
        setBasket: (basket) => dispatch(setBasket(basket))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);