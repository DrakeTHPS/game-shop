import React from 'react';
import styles from './pedestal-card.module.css'
import {connect} from "react-redux";
import {setBasket} from "../../../../store/actions/basket";

const PedestalCard = (props) => {

    const addToBasket = () => {
        console.log(props.basket)
        let newBasket = props.basket.slice();
        newBasket.push(props.gameInfo);
        props.setBasket(newBasket);
    }

    return (
        <div className={styles.card}>
            <img className={styles.poster} src={props.gameInfo.imgLink} alt="Game poster"/>
            <div className={styles.cardInfo}>
                <div className={styles.title}><h5>{props.gameInfo.title}</h5></div>
                <div>{props.gameInfo.genres.map(genre => <span key={genre.genre} className={styles.genre}>{genre.genre}</span>)}</div>
                <div>
                    {props.gameInfo.discount && <span className={styles.priceTag}
                                                      style={{backgroundColor: "green"}}>{Math.round((props.gameInfo.price / 100) * (100 - props.gameInfo.discount))} руб.</span>}
                    <span className={styles.priceTag}
                          style={props.gameInfo.discount && {textDecoration: "line-through"}}>{props.gameInfo.price} руб.</span>
                </div>
                <button className={"buyButton"} onClick={addToBasket}>В корзину</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basket: state.basket.basket,
})

const mapDispatchToProps = dispatch => {
    return{
        setBasket: (basket) => dispatch(setBasket(basket))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PedestalCard);