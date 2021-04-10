import React from 'react';
import Header from './header/header';
import  './main-page.css'
import FrontPage from "./front-page/front-page";
import {Route} from "react-router-dom";

const MainPage = () => {
    return (
        <div className={"mainPage"}>
            <Header/>
            <Route exact path={"/"} component={FrontPage}/>
            <Route path={"/basket"}/>
        </div>);
}

export default MainPage;