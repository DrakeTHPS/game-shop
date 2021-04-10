import React from 'react';
import styles from './game-card.module.css';

const GameCard = (props) =>{
    return(
        <div className={styles.gameCard}>
            <img src={props.game.imgLink} alt={props.game.title} className={styles.gameImg}/>
            <div className={styles.gameInfo}>
                <h6>{props.game.title}</h6>
                <div>{props.game.genres.map(genre => <span className={styles.genre}>{genre.genre}</span>)}</div>
            </div>
            {props.game.discount && <span className={styles.discount}>-{props.game.discount}%</span>}
            <div className={styles.priceTag}>
                <div className={styles.priceTag} style={props.game.discount && {textDecoration: "line-through"}}>{props.game.price} руб.</div>
                {props.game.discount && <div>{Math.round((props.game.price / 100) * (100 - props.game.discount))} руб.</div>}
            </div>
            <button className={"buyButton"}>В корзину</button>
        </div>
    )
}

export default GameCard;