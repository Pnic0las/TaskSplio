import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { setDate } from '../actions/calendaraction';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    table: {
        minWidth: 100,
    },
});

function BasicTable(props) {
    const classes = useStyles();
    const date = [
        [1, 2, 3, 4, 5, 6, 7],
        [8, 9, 10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19, 20, 21],
        [22, 23, 24, 25, 26, 27, 28],
        [29, 30, 31],
    ]
    
    const handleClick = (string) => {
        props.setDate(string)
        console.log('this vaut :', string);
    }
    
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>S</TableCell>
                        <TableCell >M</TableCell>
                        <TableCell >T</TableCell>
                        <TableCell >W</TableCell>
                        <TableCell >T</TableCell>
                        <TableCell >F</TableCell>
                        <TableCell >S</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {date.map((row, index) => (
                        <TableRow key={index}>
                            {row.map((cell) => (
                                <TableCell key={cell} component="th" scope="head" align="left" onClick={() => handleClick(cell)}>
                                    {cell}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const actionCreator= {
    setDate,
}

const connectedCalendar = connect(null, actionCreator)(BasicTable)

export default connectedCalendar;
