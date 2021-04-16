import React, {useEffect, useState} from 'react';
import {DataTypeProvider, EditingState} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableEditRow,
    TableEditColumn,
} from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import {connect} from "react-redux";
import {getOrders} from "../../../../store/actions/admin";
import {deleteOrder} from "../../../../store/actions/adminManagement";


const dateFormat = require("dateformat");

const getRowId = row => row.id;

const OrderManagement = (props) => {

    useEffect(() => {
        props.getOrders()
    }, []);

    const DateFormatter = ({value}) => {
        return (
            <span>
            {value ? dateFormat(value, 'dd/mm/yyyy') : ''}
        </span>
        );
    }

    const DateTypeProvider = props => (
        <DataTypeProvider
            formatterComponent={DateFormatter}
            {...props}
        />
    );

    const [columns] = useState([
        {name: 'basket', title: 'Корзина'},
        {name: 'orderDate', title: 'Дата заказа'},
        {name: 'user', title: 'Пользователь'},
    ]);

    const [tableColumnExtensions] = useState([
        {},
        {columnName: 'user', width: 200},
    ]);

    const [dateSelectColumns] = useState(['orderDate']);

    const commitChanges = ({deleted}) => {
        if (deleted) {
            props.deleteOrders(deleted[0]);
        }

    };

    return (
        <div className="card">
            <Grid
                rows={props.orders ? props.orders.map(order => {
                    return {
                        ...order,
                        user: order.user.login,
                        basket: order.basket.map(game => game.title).join(", ")
                    }
                }) : []}
                columns={columns}
                getRowId={getRowId}
            >

                <DateTypeProvider
                    for={dateSelectColumns}
                />
                <EditingState
                    onCommitChanges={commitChanges}
                />
                <Table
                    columnExtensions={tableColumnExtensions}
                />
                <TableHeaderRow/>
                <TableEditRow/>
                <TableEditColumn
                    showDeleteCommand
                />
            </Grid>
        </div>
    );
};

const mapStateToProps = state => ({
    orders: state.admin.orders,
})

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => dispatch(getOrders()),
        deleteOrders: (order) => dispatch(deleteOrder(order)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderManagement);