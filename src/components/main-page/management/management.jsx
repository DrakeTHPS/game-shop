import React, {useState} from 'react';
import styles from './management.module.css'
import {Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import GameManagement from './game-management/game-management';
import OrderManagement from './order-management/order-management';
import UserManagement from './user-management/user-management';
import classnames from 'classnames';

const Management = (props) =>{

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return(
        <div className={`content ${styles.management}`}>
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Заказы
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Игры
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            Пользователи
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <OrderManagement/>
                    </TabPane>
                    <TabPane tabId="2">
                        <GameManagement/>
                    </TabPane>
                    <TabPane tabId="3">
                        <UserManagement/>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    )
}

export default Management;