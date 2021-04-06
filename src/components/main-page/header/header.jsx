import React from 'react';
import styles from './header.module.css';
import {RiGameFill} from 'react-icons/ri'
import {Nav, NavItem} from "reactstrap";
import {Link} from "react-router-dom";

const Header = () =>{
    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <RiGameFill size={40} color={'lightgray'}/>
                ames store
            </div>
            <Nav className={styles.navbar}>
                <NavItem className={styles.navitems}>
                    <Link to="#" >Link</Link>
                </NavItem>
                <NavItem className={styles.navitems}>
                    <Link to="#">Link</Link>
                </NavItem>
                <NavItem className={styles.navitems}>
                    <Link to="#">Another Link</Link>
                </NavItem>
                <NavItem className={styles.navitems}>
                    <Link to="#">Disabled Link</Link>
                </NavItem>
            </Nav>
        </div>
    )
}

export default Header;