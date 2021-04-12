// import React, {useEffect, useState} from 'react';
// import {EditingState} from '@devexpress/dx-react-grid';
// import {
//     Grid,
//     Table,
//     TableHeaderRow,
//     TableEditRow,
//     TableEditColumn,
// } from '@devexpress/dx-react-grid-bootstrap4';
// import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
// import {getGames} from "../../../../store/actions/games";
// import {connect} from "react-redux";
// import {getGenres} from "../../../../store/actions/genres";
//
// const getRowId = row => row.id;
//
// const roles = ["ADMIN", "USER"];
//
// const GameManagement = (props) => {
//
//     useEffect(() => {
//         props.getGames();
//         props.getGenres();
//     }, []);
//
//
//     const [columns] = useState([
//         {name: 'login', title: 'Логин'},
//         {name: 'password', title: 'Пароль'},
//         {name: 'role', title: 'Роль'},
//     ]);
//
//
//     const [tableColumnExtensions] = useState([
//         {columnName: 'price', width: 80},
//     ]);
//
//     const commitChanges = ({added, changed, deleted}) => {
//         let changedRows;
//         if (added) {
//
//         }
//         if (changed) {
//
//         }
//         if (deleted) {
//
//         }
//
//     };
//
//     return (
//         <div className="card">
//             <Grid
//                 rows={props.games ? props.games.map(game => {
//                     return {
//                         ...game,
//                         genres: JSON.stringify(game.genres)
//                     }
//                 }) : []}
//                 columns={columns}
//                 getRowId={getRowId}
//             >
//
//                 <EditingState
//                     onCommitChanges={commitChanges}
//                 />
//                 <Table
//                     columnExtensions={tableColumnExtensions}
//                 />
//                 <TableHeaderRow/>
//                 <TableEditRow/>
//                 <TableEditColumn
//                     showAddCommand
//                     showEditCommand
//                     showDeleteCommand
//                 />
//             </Grid>
//         </div>
//     );
// };
//
// const mapStateToProps = state => ({
//     games: state.games.games,
//     genres: state.genres.genres,
// })
//
// const mapDispatchToProps = dispatch => {
//     return {
//         getGames: (game) => dispatch(getGames(game)),
//         getGenres: () => dispatch(getGenres()),
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(GameManagement);