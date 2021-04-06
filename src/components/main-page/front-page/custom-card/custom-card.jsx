import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Button
} from 'reactstrap';
import styles from './custom-card.module.css'

const CustomCard = (props) => {
    return (
        <Card className={styles.card}>
            <CardImg className={styles.poster} src={props.gameInfo.img} alt="Game poster"/>
            <CardBody className={styles.poster}>
                <CardTitle tag="h5">{props.gameInfo.name}</CardTitle>
                <div>
                    {props.gameInfo.discount && <span className={styles.priceTag} style={{backgroundColor: "green"}}>{Math.round((props.gameInfo.price / 100) * (100 - props.gameInfo.discount))} руб.</span>}
                    <span className={styles.priceTag} style={props.gameInfo.discount && {textDecoration: "line-through"}}>{props.gameInfo.price} руб.</span>
                </div>
                <Button>Добавить в корзину</Button>
            </CardBody>
        </Card>
    )
}

export default CustomCard;