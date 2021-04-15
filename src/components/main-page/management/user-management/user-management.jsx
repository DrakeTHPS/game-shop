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
import {getUsers} from "../../../../store/actions/admin";
import {Form, Input} from "reactstrap";
import {ADMIN, USER} from "../../../../utils/consts";

const getRowId = row => row.id;

const roles = [ADMIN, USER];

const GameManagement = (props) => {

    useEffect(() => {
        props.getUsers();
    }, []);


    const RoleEditor = ({value, onValueChange}) => {
        return (
            <Input type="select" name="select" onChange={event => {onValueChange(event.target.value)}}>
                {roles.map(role => <option value={role} selected={value===role}>{role}</option>)}
            </Input>
        );
    }

    const RoleTypeProvider = props => (
        <DataTypeProvider
            editorComponent={RoleEditor}
            {...props}
        />
    );


    const PasswordEditor = ({value, onValueChange}) => {
        return (
            <input type="password" placeholder={"Установите пароль"} onChange={(event) => {
                onValueChange(event.target.value)
            }} />
        );
    }

    const PasswordTypeProvider = props => (
        <DataTypeProvider
            editorComponent={PasswordEditor}
            {...props}
        />
    );

    const [columns] = useState([
        {name: 'login', title: 'Логин'},
        {name: 'password', title: 'Пароль'},
        {name: 'role', title: 'Роль'},
    ]);

    const [tableColumnExtensions] = useState([
        {columnName: 'login', width: 250},
        {columnName: 'role', width: 130},
    ]);

    const [roleSelectColumns] = useState(['role']);
    const [passwordSelectColumns] = useState(['password']);

    const commitChanges = ({added, changed, deleted}) => {
        let changedRows;
        if (added) {

        }
        if (changed) {

        }
        if (deleted) {

        }

    };

    return (
        <div className="card">
            <Grid
                rows={props.users ? props.users.map(user => {
                    return{
                        ...user,
                        password: '********'
                    }
                }) : []}
                columns={columns}
                getRowId={getRowId}
            >

                <RoleTypeProvider
                    for={roleSelectColumns}
                />
                <PasswordTypeProvider
                    for={passwordSelectColumns}
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
                    showAddCommand
                    showEditCommand
                    showDeleteCommand
                />
            </Grid>
        </div>
    );
};


const mapStateToProps = state => ({
    users: state.admin.users,
})

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(getUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameManagement);