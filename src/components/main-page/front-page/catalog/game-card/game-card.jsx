import React from 'react';
import styles from './game-card.module.css';
import {connect} from "react-redux";
import {setBasket} from "../../../../../store/actions/basket";

const GameCard = (props) =>{

    const addToBasket = () =>{
        let newBasket = props.basket.slice();
        newBasket.push(props.game);
        props.setBasket(newBasket);
    }

    return(
        <div className={styles.gameCard}>
            <img src={props.game.imgLink} alt={props.game.title} className={styles.gameImg}/>
            <div className={styles.gameInfo}>
                <h6>{props.game.title}</h6>
                <div>{props.game.genres.map(genre => <span key={genre.id} className={styles.genre}>{genre.genre}</span>)}</div>
            </div>
            {props.game.discount && <span className={styles.discount}>-{props.game.discount}%</span>}
            <div className={styles.priceTag}>
                <div className={styles.priceTag} style={props.game.discount && {textDecoration: "line-through"}}>{props.game.price} руб.</div>
                {props.game.discount && <div>{Math.round((props.game.price / 100) * (100 - props.game.discount))} руб.</div>}
            </div>
            <button className={"buyButton"} onClick={addToBasket}>В корзину</button>
        </div>
    )
}

const mapStateToProps = state =>({
    basket: state.basket.basket
})

const mapDispatchToProps = dispatch => {
    return{
        setBasket: (basket) => dispatch(setBasket(basket))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCard);
