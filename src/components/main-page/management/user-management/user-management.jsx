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
import {Input} from "reactstrap";
import {ADMIN, USER} from "../../../../utils/consts";
import {addUser, deleteUser, editUser} from "../../../../store/actions/adminManagement";

const getRowId = row => row.id;

const roles = [ADMIN, USER];

const GameManagement = (props) => {

    useEffect(() => {
        props.getUsers();
    }, []);


    const RoleEditor = ({value, onValueChange}) => {
        return (
            <Input type="select" name="select" value={value? value : "ROLE_ADMIN"} onChange={event => {onValueChange(event.target.value)}}>
                {roles.map(role => <option value={role}>{role}</option>)}
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
        {columnName: 'role', width: 200},
    ]);

    const [roleSelectColumns] = useState(['role']);
    const [passwordSelectColumns] = useState(['password']);

    const commitChanges = ({added, changed, deleted}) => {
        if (added) {
            props.addUser({...added[0], role: added[0].role? added[0].role : "ROLE_ADMIN"});
        }
        if (changed) {
            props.users.forEach(row => {
                if (changed[row.id]) {
                    let editedRow = {...row, ...changed[row.id]};
                    props.editUser(editedRow);
                }
            })
        }
        if (deleted) {
            props.deleteUser(deleted[0]);
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
        editUser: (user) => dispatch(editUser(user)),
        addUser: (user) => dispatch(addUser(user)),
        deleteUser: (user) => dispatch(deleteUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameManagement);