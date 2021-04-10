import React from 'react';
import {connect} from "react-redux";
import {setBasket} from "../../../store/actions/basket";
import BasketItem from "./basket-item/basket-item";
import styles from './basket.module.css'
import {useHistory} from 'react-router';

const Basket = (props) => {
    const history = useHistory();
    const deleteFromBasket = (game) => {
        let newBasket = props.basket.filter(item => item !== game);
        props.setBasket(newBasket);
        if (newBasket.length === 0)
            history.push("/")
    }
    return (
        <div className={`content ${styles.basket}`}>
            <h2>ВАША КОРЗИНА</h2>
            {props.basket && props.basket.map(game => <BasketItem game={game} deleteFunc={deleteFromBasket}/>)}
            <div className={styles.checkout}>
                <div className={styles.total}><span>Общая сумма</span><span>10000 руб.</span></div>
                <button className={`buyButton ${styles.checkoutButton}`}>Купить</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basket: state.basket.basket,
})

const mapDispatchToProps = dispatch => {
    return {
        setBasket: (basket) => dispatch(setBasket(basket))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);