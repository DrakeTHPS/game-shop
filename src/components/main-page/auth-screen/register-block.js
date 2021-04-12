import React, {useState} from 'react';
import styles from "./auth-screen.module.css";
import {useHistory} from "react-router";

const RegisterBlock = () => {
    const history = useHistory();

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();
    return (
        <div className={styles.authBlock} style={{height:"70%"}}>
            <h1>Зарегистрироваться</h1>
            <div className={styles.inputBlock}>
                <span>Логин</span>
                <input className={styles.authInput} onChange={(e)=>setLogin(e.target.value)}/>
            </div>
            <div className={styles.inputBlock}>
                <span>Пароль</span>
                <input className={styles.authInput} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className={styles.inputBlock}>
                <span>Повторите пароль</span>
                <input className={styles.authInput} onChange={(e)=>setRepeatPassword(e.target.value)}/>
            </div>
            <button className={styles.submitButton}>Зарегистрироваться</button>
            <span>Уже есть аккаунт? <a href={"#"} onClick={()=>history.push("/auth")}>Войти</a></span>
        </div>
    )
}

export default RegisterBlock;