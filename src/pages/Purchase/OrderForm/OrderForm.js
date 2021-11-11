import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const OrderForm = ({ car }) => {
    const { user } = useAuth()
    const { name, price } = car;
    const history = useHistory()

    const carInfo = {
        carName: name,
        carPrice: price,
        name: user?.displayName,
        email: user?.email
    }

    const [buyerInfo, setBuyerInfo] = useState(carInfo)
    // handle order data
    const handleOnClick = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...buyerInfo }
        newInfo[field] = value;
        const field2 = 'status'
        newInfo[field2] = 'pending';
        setBuyerInfo(newInfo)
    }

    // handle form and post data to db
    const handleForm = e => {
        console.log(buyerInfo)
        // 
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buyerInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order placed successfully')
                    setBuyerInfo({})
                    history.push('/dashboard/myOrders')
                }
            })
        e.preventDefault()
    }
    return (
        < Box>
            <Typography variant='h4'>
                Contact Seller
            </Typography>
            <form onSubmit={handleForm}>
                <TextField
                    id="outlined-basic"
                    value={name}
                    disabled
                    label="car name"
                    sx={{ width: '75%', m: 1 }}
                    name="car_name"
                    variant="outlined" />
                <TextField
                    id="outlined-basic"
                    label="Name"
                    defaultValue={user.displayName}
                    required
                    onBlur={handleOnClick}
                    sx={{ width: '75%', m: 1 }}
                    name="name"
                    variant="outlined" />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    defaultValue={user.email}
                    sx={{ width: '75%', m: 1 }}
                    type='email'
                    required
                    onBlur={handleOnClick}
                    name="email"
                    variant="outlined" />
                <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    sx={{ width: '75%', m: 1 }}
                    type='number'
                    required
                    onBlur={handleOnClick}
                    name="phoneNumber"
                    variant="outlined" />
                <TextField
                    id="outlined-basic"
                    label="Address"
                    sx={{ width: '75%', m: 1 }}
                    type='address'
                    onBlur={handleOnClick}
                    name="address"
                    required
                    variant="outlined" />
                <TextField
                    id="outlined-basic"
                    label="Price"
                    disabled
                    value={price}
                    sx={{ width: '75%', m: 1 }}
                    name="name"
                    variant="outlined" />
                <Button variant='contained' type='submit'>Place Order Now</Button>
            </form>
        </Box>
    );
};

export default OrderForm;