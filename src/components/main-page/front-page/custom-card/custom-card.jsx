import React from 'react';
import styles from './custom-card.module.css'

const CustomCard = (props) => {
    return (
        <div className={styles.card}>
            <img className={styles.poster} src={props.gameInfo.img} alt="Game poster"/>
            <div className={styles.cardInfo}>
                <div className={styles.title}><h5>{props.gameInfo.name}</h5></div>
                <div>
                    {props.gameInfo.discount && <span className={styles.priceTag} style={{backgroundColor: "green"}}>{Math.round((props.gameInfo.price / 100) * (100 - props.gameInfo.discount))} руб.</span>}
                    <span className={styles.priceTag} style={props.gameInfo.discount && {textDecoration: "line-through"}}>{props.gameInfo.price} руб.</span>
                </div>
                <button className={styles.buyButton}>В корзину</button>
            </div>
        </div>
    )
}

export default CustomCard;