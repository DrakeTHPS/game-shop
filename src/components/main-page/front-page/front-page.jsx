import React, {useEffect} from 'react';
import styles from './front-page.module.css'
import PedestalCard from "./pedestal-card/pedestal-card";
import {getGames} from "../../../store/actions/games";
import {connect} from "react-redux";
import {getBestGames} from "../../../store/selectors/games";
import Catalog from "./catalog/catalog";


const FrontPage = (props) => {

    useEffect(() => {
        props.getGames();
    }, []);


    return (
        <div className={"content"}>
            <div className={styles.pedestal}>
                {props.topGames.map(game => <PedestalCard key={game.id} gameInfo={game}/>)}
            </div>
            <div className={styles.catalogArea}>
                <Catalog/>
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    games: state.games.games,
    topGames: getBestGames(state, 3)
})

const mapDispatchToProps = dispatch => {
    return{
        getGames: () => dispatch(getGames())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);