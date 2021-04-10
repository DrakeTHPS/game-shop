import React, {useState} from 'react';
import {EditingState} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableEditRow,
    TableEditColumn,
} from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import { setGames} from "../../../../store/actions/games";
import {connect} from "react-redux";

const getRowId = row => row.id;

const GameManagement = (props) => {

    const [columns] = useState([
        {name: 'id', title: 'ID'},
        {name: 'title', title: 'Название'},
        {name: 'developer', title: 'Разработчик'},
        {name: 'genres', title: 'Жанры'},
        {name: 'imgLink', title: 'Обложка'},
        {name: 'price', title: 'Цена'},
        {name: 'releaseDate', title: 'Дата выхода'},
    ]);

    const [tableColumnExtensions] = useState([
        {columnName: 'id', width: 60},
        {columnName: 'price', width:80},
    ]);
    const [editingRowIds, setEditingRowIds] = useState([]);
    const [addedRows, setAddedRows] = useState([]);
    const [rowChanges, setRowChanges] = useState({});

    // const commitChanges = ({added, changed, deleted}) => {
    //     let changedRows;
    //     if (added) {
    //         const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
    //         changedRows = [
    //             ...rows,
    //             ...added.map((row, index) => ({
    //                 id: startingAddedId + index,
    //                 ...row,
    //             })),
    //         ];
    //     }
    //     if (changed) {
    //         changedRows = rows.map(row => (changed[row.id] ? {...row, ...changed[row.id]} : row));
    //     }
    //     if (deleted) {
    //         const deletedSet = new Set(deleted);
    //         changedRows = rows.filter(row => !deletedSet.has(row.id));
    //     }
    //     setRows(changedRows);
    // };

    return (
        <div className="card">
            <Grid
                rows={props.games ? props.games.map(game => {
                    return {
                        ...game,
                        genres: game.genres.map(genre => {return genre.genre}).join(", ")
                    }
                }) : []}
                columns={columns}
                getRowId={getRowId}
            >
                <EditingState
                    editingRowIds={editingRowIds}
                    onEditingRowIdsChange={setEditingRowIds}
                    rowChanges={rowChanges}
                    onRowChangesChange={setRowChanges}
                    addedRows={addedRows}
                    //onCommitChanges={commitChanges}
                />
                <Table
                    columnExtensions={tableColumnExtensions}
                />
                <TableHeaderRow/>
                <TableEditRow/>
                <TableEditColumn
                    showAddCommand={!addedRows.length}
                    showEditCommand
                    showDeleteCommand
                />
            </Grid>
        </div>
    );
};

const mapStateToProps = state =>({
    games: state.games.games,
})

const mapDispatchToProps = dispatch => {
    return{
        setGames: (game) => dispatch(setGames(game))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameManagement);