import React from 'react';
import styles from './basket-item.module.css';

const BasketItem = (props) =>{
    return(
        <div className={styles.basketItem}>
            <img src={props.game.imgLink} className={styles.gameImg}/>
            <h6 className={styles.title}>{props.game.title}</h6>
            <div className={styles.priceTag}>
                <div style={props.game.discount && {textDecoration: "line-through"}}>{props.game.price} руб.</div>
                {props.game.discount && <div> {Math.round((props.game.price / 100) * (100 - props.game.discount))} руб.</div>}
                <button className={styles.deleteButton} onClick={() => props.deleteFunc(props.game)}>Удалить</button>
            </div>
        </div>
    )
}

export default BasketItem;