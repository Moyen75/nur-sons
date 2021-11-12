import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';



const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch(`https://arcane-meadow-17287.herokuapp.com/order?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])
    return (
        <Container>

            <Typography variant='h4'>
                My Orders {orders?.length}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ fontWeight: '600' }}>
                            <TableCell>Product Id</TableCell>
                            <TableCell align="center">Product name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">status</TableCell>
                            <TableCell align="center">action</TableCell>
                        </TableRow>
                    </TableHead>
                    {
                        orders?.map(order => <MyOrder
                            key={order._id}
                            order={order}
                        ></MyOrder>)
                    }
                </Table>
            </TableContainer>
        </Container>
    );
};

export default MyOrders;