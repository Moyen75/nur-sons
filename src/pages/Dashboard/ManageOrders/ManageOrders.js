import { Button, Container, Typography } from '@mui/material';
import useOrders from '../../../hooks/useOrders';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageOrders = () => {
    const orders = useOrders()


    const confirmOrder = (id) => {
        const type = 'confirmed'
        updateStatus(id, type)
    }
    const shippedOrder = (id) => {
        const type = 'shipped'
        updateStatus(id, type)
    }
    const deleteOrder = (id) => {
        const process = window.confirm('Are sure to delete?')
        if (process) {
            fetch(`https://arcane-meadow-17287.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order deleted successfully')
                    }
                })
        }
    }
    // update order status
    const updateStatus = (id, type) => {
        const data = { id, type }

        fetch('https://arcane-meadow-17287.herokuapp.com/orders', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert(`Order ${type} successfully`)

                }
            })

    }

    return (
        <Container>
            <Typography variant='h4'>
                Manage All Orders
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">status</TableCell>
                            <TableCell align="left">customer</TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders?.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell align="left">{row.carName}</TableCell>
                                <TableCell align="left">{row.carPrice}</TableCell>
                                <TableCell align="left">{row.status}</TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left"><Button variant="contained" sx={{ backgroundColor: 'success.main' }} onClick={() => confirmOrder(row._id)}>confirm</Button></TableCell>
                                <TableCell align="left"><Button variant="contained" sx={{ backgroundColor: 'success.main' }} onClick={() => shippedOrder(row._id)}>shipped</Button></TableCell>
                                <TableCell align="left"><Button variant="contained" sx={{ backgroundColor: 'success.main' }} onClick={() => deleteOrder(row._id)}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageOrders;