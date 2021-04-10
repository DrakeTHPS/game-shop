import React from 'react';
import styles from './header.module.css';
import {RiGameFill} from 'react-icons/ri'
import {Nav, Navbar, NavItem} from "reactstrap";
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <RiGameFill size={40} color={'lightgray'}/>
                ames store
            </div>
            <Navbar dark expand="md">
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink to="/">Магазин</NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink to="/basket">Корзина</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/auth">Войти</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;