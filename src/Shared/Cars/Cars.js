import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import Car from '../Car/Car';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useData from '../../hooks/useData';
import { NavLink } from 'react-router-dom';

const Cars = () => {
    const cars = useData()
    return (
        <Container>
            <Typography variant='h4' sx={{ fontWeight: '600', p: 6 }}>
                Our Collection
                <hr style={{ width: '400px'}} />
            </Typography>
            <Grid container spacing={2} sx={{ mb: 2 }}>
                {
                    cars?.slice(0, 6).map(car => <Car
                        key={car._id}
                        car={car}
                    ></Car>)
                }
            </Grid>
            <NavLink style={{ textDecoration: 'none', marginTop: '6px' }} to='/allCollection'>
                <Button variant='contained'>More collection<ArrowForwardIosIcon sx={{ fontSize: '16px' }} /><ArrowForwardIosIcon sx={{ fontSize: '16px' }} /></Button>
            </NavLink>
        </Container>
    );
};

export default Cars;