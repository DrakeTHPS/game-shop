import React, {useState} from 'react';
import styles from "./auth-screen.module.css";
import {useHistory} from "react-router";
import {setRole} from "../../../store/actions/auth";
import {connect} from "react-redux";

const AuthBlock = (props) => {
    const history = useHistory();

    const tryToAuth = () => {
        fetch("/signin", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: "POST",
            body: JSON.stringify({login: login, password: password})
        })
            .then(response => response.json())
            .then(jsonData => {
                sessionStorage.setItem("jwt", JSON.stringify(jsonData));
                props.setRole(jsonData.roles[0]);
                history.push("/");
            })
    }
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    return (
        <div className={styles.authBlock}>
            <h1>ВОЙТИ</h1>
            <div className={styles.inputBlock}>
                <span>Логин</span>
                <input className={styles.authInput} onChange={(e) => setLogin(e.target.value)}/>
            </div>
            <div className={styles.inputBlock}>
                <span>Пароль</span>
                <input type={"password"} className={styles.authInput} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className={styles.submitButton} onClick={tryToAuth}>Войти</button>
            <span>Ещё не зарегистрированы? <a href={"#"}
                                              onClick={() => history.push("/auth/register")}>Зарегистрироваться</a></span>
        </div>
    )
}

const mapStateToProps = state => ({
    role: state.auth.role
})

const mapDispatchToProps = dispatch => {
    return {
        setRole: (role) => dispatch(setRole(role))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthBlock);