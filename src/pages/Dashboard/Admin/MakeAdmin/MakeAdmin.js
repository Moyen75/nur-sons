import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Users from '../Users/Users';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')


    const handleEmail = e => {
        const value = e.target.value;
        setEmail(value)
    }
    const handleMakeAdmin = e => {
        const user = { email }
        fetch('https://arcane-meadow-17287.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Admin added successfully')
                    setEmail('')
                }
            })
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                    <Users></Users>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant='h5'>
                        Make Admin
                    </Typography>
                    <form onSubmit={handleMakeAdmin}>
                        <TextField
                            id="standard-basic"
                            label="E-mail"
                            onBlur={handleEmail}
                            sx={{ width: '75%' }}
                            variant="standard" />
                        <Button type='submit' variant='contained' sx={{mt:1}}>Make admin</Button>
                    </form>
                </Grid>

            </Grid>
        </Container>
    );
};

export default MakeAdmin;