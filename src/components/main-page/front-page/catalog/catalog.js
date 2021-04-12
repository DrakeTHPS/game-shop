import React, {useState} from 'react';
import {Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import GameCard from "./game-card/game-card";
import classnames from 'classnames';
import {getGames} from "../../../../store/actions/games";
import {connect} from "react-redux";
import {getBestGames, getDiscounts, getNewGames} from "../../../../store/selectors/games";
import {getRole} from "../../../../utils/utils";
import {ANONYMOUS} from "../../../../utils/consts";


const Catalog = (props)=>{

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return(
        <div style={{width:"700px"}}>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Новинки
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Лидеры продаж
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        Скидки
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <div>
                        {props.newGames.map(game=><GameCard key={game.id} game={game}/>)}
                    </div>
                </TabPane>
                <TabPane tabId="2">
                    <div>
                        {props.topSales.map(game=><GameCard key={game.id} game={game}/>)}
                    </div>
                </TabPane>
                <TabPane tabId="3">
                    <div>
                        {props.discountedGames.map(game=><GameCard key={game.id} game={game}/>)}
                    </div>
                </TabPane>
            </TabContent>
        </div>
    )
}

const mapStateToProps = state =>({
    newGames: getNewGames(state),
    topSales: getBestGames(state, 10),
    discountedGames: getDiscounts(state)
})

const mapDispatchToProps = dispatch => {
    return{
        getGames: () => dispatch(getGames())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);