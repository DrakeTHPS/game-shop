import React from 'react';
import Header from './header/header';
import  './main-page.css'
import FrontPage from "./front-page/front-page";
import {Route} from "react-router-dom";
import Basket from "./basket/basket";

const MainPage = () => {
    return (
        <div className={"mainPage"}>
            <Header/>
            <Route exact path={"/"} component={FrontPage}/>
            <Route path={"/basket"} component={Basket}/>
            <Route path={"/management"}/>
        </div>);
}

export default MainPage;