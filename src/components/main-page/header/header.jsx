import React from 'react';
import styles from './header.module.css';
import {RiGameFill} from 'react-icons/ri'
import {Nav, Navbar, NavItem} from "reactstrap";
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux";
import {ADMIN, ANONYMOUS} from "../../../utils/consts";
import {setRole} from "../../../store/actions/auth";
import {useHistory} from "react-router";

const Header = (props) => {
    const history = useHistory();
    const signOut = () =>{
        sessionStorage.clear();
        props.setRole(ANONYMOUS);
        history.push("/");
    }
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <RiGameFill size={40} color={'lightgray'}/>
                ames store
            </div>
            <Navbar dark expand="md">
                <Nav className="mr-auto" navbar>
                    <NavItem className={styles.navItem}>
                        <NavLink to="/">Магазин</NavLink>
                    </NavItem>
                    {props.basket.length !== 0 && <NavItem className={styles.navItem}>
                        <NavLink to="/basket">Корзина</NavLink>
                    </NavItem>}
                    {props.role===ADMIN && <NavItem className={styles.navItem}>
                        <NavLink to="/management">Управление</NavLink>
                    </NavItem>}
                    <NavItem>
                        {props.role === ANONYMOUS ? <NavLink to="/auth">Войти</NavLink> : <button className={styles.signOutButton} onClick={signOut}>Выйти</button>}
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

const mapStateToProps = state => ({
    basket: state.basket.basket,
    role: state.auth.role
})

const mapDispatchToProps = dispatch => {
    return{
        setRole: (role) => dispatch(setRole(role))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);