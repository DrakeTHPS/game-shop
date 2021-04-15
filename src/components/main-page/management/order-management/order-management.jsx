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
import {Multiselect} from 'multiselect-react-dropdown';
import {getOrders} from "../../../../store/actions/admin";

const getRowId = row => row.id;

const OrderManagement = (props) => {

    useEffect(() => {
        props.getOrders()
    }, []);

    const [columns] = useState([
        {name: 'basket', title: 'Корзина'},
        {name: 'orderDate', title: 'Дата заказа'},
        {name: 'user', title: 'Пользователь'},
    ]);

    const [tableColumnExtensions] = useState([
        {},
        {columnName: 'user', width: 200},
    ]);
    const commitChanges = ({deleted}) => {
        if (deleted) {

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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderManagement);