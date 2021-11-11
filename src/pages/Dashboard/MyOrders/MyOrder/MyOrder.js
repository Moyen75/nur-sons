import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';

const MyOrder = ({ order }) => {

    const handleDeleteOrder = () => {
        const process = window.confirm('Are you sure to delete this order?')
        if (process) {
            fetch(`http://localhost:5000/orders/${order._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('order deleted successfully')
                    }
                })
        }
    }


    return (
        <TableBody>
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {order._id}
                </TableCell>
                <TableCell align="center">{order.carName}</TableCell>
                <TableCell align="center">${order.carPrice}</TableCell>
                <TableCell align="center">{order.status}</TableCell>
                <TableCell align="center"><Button onClick={handleDeleteOrder}> <DeleteForeverIcon /></Button></TableCell>
            </TableRow>
        </TableBody>
    );
};

export default MyOrder;