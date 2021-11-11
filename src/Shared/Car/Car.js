import { Grid, Typography, CardMedia, Paper, Rating, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Car = ({ car }) => {
    const { name, img, price, description, rating,_id } = car;
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation='3'>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="green iguana"
                />
                <Typography variant='h4'>
                    {name}
                </Typography>
                <Typography sx={{ textAlign: 'justify', p: 1 }} >
                    {description.slice(0, 200)}
                </Typography>
                <Typography>
                    <Rating name="read-only" value={rating} readOnly />
                </Typography>
                <Typography>
                    price:${price}
                </Typography>
                <NavLink style={{ textDecoration: 'none' }} to={`/purchase/${_id}`}>
                    <Button variant='contained' sx={{ width: '100%' }}>Purchase Now</Button>
                </NavLink>
            </Paper>
        </Grid>
    );
};

export default Car;