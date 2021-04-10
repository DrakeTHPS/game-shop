import React from 'react';
import styles from './pedestal-card.module.css'

const PedestalCard = (props) => {
    return (
        <div className={styles.card}>
            <img className={styles.poster} src={props.gameInfo.imgLink} alt="Game poster"/>
            <div className={styles.cardInfo}>
                <div className={styles.title}><h5>{props.gameInfo.title}</h5></div>
                <div>{props.gameInfo.genres.map(genre => <span className={styles.genre}>{genre.genre}</span>)}</div>
                <div>
                    {props.gameInfo.discount && <span className={styles.priceTag} style={{backgroundColor: "green"}}>{Math.round((props.gameInfo.price / 100) * (100 - props.gameInfo.discount))} руб.</span>}
                    <span className={styles.priceTag} style={props.gameInfo.discount && {textDecoration: "line-through"}}>{props.gameInfo.price} руб.</span>
                </div>
                <button className={"buyButton"}>В корзину</button>
            </div>
        </div>
    )
}

export default PedestalCard;