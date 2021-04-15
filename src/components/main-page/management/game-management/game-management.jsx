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

    const [columns] = useState([
        {name: 'title', title: 'Название'},
        {name: 'developer', title: 'Разработчик'},
        {name: 'genres', title: 'Жанры'},
        {name: 'imgLink', title: 'Обложка'},
        {name: 'price', title: 'Цена'},
        {name: 'releaseDate', title: 'Дата выхода'},
    ]);

    const [multiSelectColumns] = useState(['genres']);

    const [tableColumnExtensions] = useState([
        {columnName: 'price', width: 70},
        {columnName: 'releaseDate', width: 130},
    ]);

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
        getGames: (game) => dispatch(getGames(game)),
        getGenres: () => dispatch(getGenres()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameManagement);