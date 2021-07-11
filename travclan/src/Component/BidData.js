
import React, { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const BidData = () => {
    const classes = useStyles();
    const [customerData, setCustomerData] = useState([]);
    let { customerId } = useParams();
    console.log("customerId", customerId);

    useEffect(() => {
        fetch('https://intense-tor-76305.herokuapp.com/merchants')
            .then(res => res.json())
            .then(data => setCustomerData(data.find(e => e.id == customerId)));
    }, []);
    console.log("customerData", customerData.bids);

    return (
        <div>
            <h1>Customer's Id : {customerId} Bids Data</h1>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">BidsId</TableCell>
                            <TableCell align="center">Car-Title</TableCell>
                            <TableCell align="center">Amount</TableCell>
                            <TableCell align="center">Created</TableCell>
                        </TableRow>
                    </TableHead>
                    {customerData.bids || undefined ? (<TableBody>
                        {customerData.bids.map((row) => {
                            <TableRow key={row.id}>
                                <TableCell align="center" component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="center">{row.carTitle}</TableCell>
                                <TableCell align="center">{row.amount}</TableCell>
                                <TableCell align="center">{row.created}</TableCell>
                            </TableRow>
                        }
                        )}
                    </TableBody>) : null}
                </Table>
            </TableContainer>
        </div>
    )
}
export default BidData;