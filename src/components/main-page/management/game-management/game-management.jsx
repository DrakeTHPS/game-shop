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
import {getGames} from "../../../../store/actions/games";
import {connect} from "react-redux";
import {Multiselect} from 'multiselect-react-dropdown';
import {getGenres} from "../../../../store/actions/admin";
import {addGame, deleteGame, editGame} from "../../../../store/actions/adminManagement";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styles from '../management.module.css';

const dateFormat = require("dateformat");


const getRowId = row => row.id;

const GameManagement = (props) => {

    useEffect(() => {
        props.getGames();
        props.getGenres();
    }, []);

    const MultiSelectFormatter = ({value}) => {
        return (
            <span>
            {value ? JSON.parse(value).map((genre) => genre.genre).join(', ') : ''}
        </span>
        );
    }

    const MultiSelectEditor = ({value, onValueChange}) => (
        <Multiselect
            options={props.genres} // Options to display in the dropdown
            onSelect={(selectedList) => {
                onValueChange(JSON.stringify(selectedList))
            }} // Function will trigger on select event
            onRemove={(selectedList) => {
                onValueChange(JSON.stringify(selectedList))
            }} // Function will trigger on remove event
            selectedValues={value ? JSON.parse(value) : []} // Preselected value to persist in dropdown
            displayValue="genre" // Property name to display in the dropdown options
        />
    );

    const MultiSelectTypeProvider = props => (
        <DataTypeProvider
            formatterComponent={MultiSelectFormatter}
            editorComponent={MultiSelectEditor}
            {...props}
        />
    );

    const DateFormatter = ({value}) => {
        return (
            <span>
            {value ? dateFormat(value, 'dd/mm/yyyy') : ''}
        </span>
        );
    }

    const DateEditor = ({value, onValueChange}) => {
        let now = new Date();
        if (!value) {
            onValueChange(now)
        }
        return (
            <DatePicker className={styles.datePickerBox} selected={value ? new Date(value) : now}
                        onChange={date => onValueChange(date)}/>
        );
    }

    const DateTypeProvider = props => (
        <DataTypeProvider
            formatterComponent={DateFormatter}
            editorComponent={DateEditor}
            {...props}
        />
    );

    const [columns] = useState([
        {name: 'title', title: 'Название'},
        {name: 'developer', title: 'Разработчик'},
        {name: 'genres', title: 'Жанры'},
        {name: 'releaseDate', title: 'Дата выхода'},
        {name: 'imgLink', title: 'Обложка'},
        {name: 'price', title: 'Цена'},
    ]);

    const [multiSelectColumns] = useState(['genres']);
    const [dateSelectColumns] = useState(['releaseDate']);

    const [tableColumnExtensions] = useState([
        {columnName: 'price', width: 70},
        {columnName: 'releaseDate', width: 130},
    ]);

    const commitChanges = ({added, changed, deleted}) => {
        if (added) {
            let addedRow = {...added[0], genres: JSON.parse(added[0].genres)}
            props.addGame(addedRow);
        }
        if (changed) {
            props.games.forEach(row => {
                if (changed[row.id]) {
                    let editedRawRow = {...row, ...changed[row.id]};
                    try {
                        let editedRow = {...editedRawRow, genres: JSON.parse(editedRawRow.genres)};
                        props.editGame(editedRow);
                    } catch (e) {
                        props.editGame(editedRawRow);
                    }
                }
            })
        }
        if (deleted) {
            props.deleteGame(deleted[0]);
        }

    };

    return (
        <div className="card">
            <Grid
                rows={props.games ? props.games.map(game => {
                    return {
                        ...game,
                        genres: JSON.stringify(game.genres)
                    }
                }) : []}
                columns={columns}
                getRowId={getRowId}
            >

                <MultiSelectTypeProvider
                    for={multiSelectColumns}
                />

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
                    showAddCommand
                    showEditCommand
                    showDeleteCommand
                />
            </Grid>
        </div>
    );
};

const mapStateToProps = state => ({
    games: state.games.games,
    genres: state.admin.genres,
})

const mapDispatchToProps = dispatch => {
    return {
        getGames: () => dispatch(getGames()),
        getGenres: () => dispatch(getGenres()),
        addGame: (game) => dispatch(addGame(game)),
        editGame: (game) => dispatch(editGame(game)),
        deleteGame: (game) => dispatch(deleteGame(game)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameManagement);