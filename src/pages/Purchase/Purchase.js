import {  Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import { useParams } from 'react-router';
import useData from '../../hooks/useData';
import TopNavigation from '../Home/TopNavigation/TopNavigation';
import { Box } from '@mui/system';
import OrderForm from './OrderForm/OrderForm';

const Purchase = () => {
    const cars = useData()
    // const { user } = useAuth()
    const { id } = useParams()
    const [car, setCar] = useState({})

    useEffect(() => {
        const currentCar = cars?.find(car => car._id === id)
        setCar(currentCar)
    }, [id, cars])




    return (
        <Box>
            <TopNavigation></TopNavigation>
            <Container sx={{ my: 5 }}>
                {
                    car && <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sx={{ mt: 6 }}>
                            <Paper elevation='3'>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={car.img}
                                    alt="green iguana"
                                />
                                <Typography>
                                    {car.model}
                                </Typography>
                                <Typography variant="h4">
                                    {car.name}
                                </Typography>
                                <Rating name="read-only" value={car.rating} readOnly />
                                <Typography>
                                    {car.speed}
                                </Typography>
                                <Typography>
                                    {car.gear}
                                </Typography>
                                <Typography sx={{ textAlign: 'justify', p: 2 }}>
                                    {car.description}
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                           <OrderForm 
                           car={car}
                           ></OrderForm>
                        </Grid>
                    </Grid>
                }
            </Container>
        </Box>
    );
};

export default Purchase;