import React from 'react';
import Header from './header/header';
import  './main-page.css'
import FrontPage from "./front-page/front-page";

const MainPage = () => {
    return (
        <div className={"mainPage"}>
            <Header/>
            <FrontPage/>
        </div>);
}

export default MainPage;