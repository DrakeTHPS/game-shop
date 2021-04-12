import React from 'react';
import styles from './auth-screen.module.css'
import AuthBlock from "./auth-block";
import {Route} from "react-router-dom";
import RegisterBlock from "./register-block";

const AuthScreen = (props) => {
    return (
        <div className={styles.authScreen}>
            <div className={styles.leftPart}>
                <Route exact path={"/auth"} component={AuthBlock}/>
                <Route path={"/auth/register"} component={RegisterBlock}/>
            </div>
        </div>
    )
}

export default AuthScreen;