import React from 'react';
import Header from './header/header';
import  './main-page.css'
import FrontPage from "./front-page/front-page";
import {Route} from "react-router-dom";
import Basket from "./basket/basket";
import Management from "./management/management";
import AuthScreen from "./auth-screen/auth-screen";

const MainPage = () => {
    return (
        <div className={"mainPage"}>
            <Header/>
            <Route exact path={"/"} component={FrontPage}/>
            <Route path={"/auth"} component={AuthScreen}/>
            <Route path={"/basket"} component={Basket}/>
            <Route path={"/management"} component={Management}/>
        </div>);
}

export default MainPage;