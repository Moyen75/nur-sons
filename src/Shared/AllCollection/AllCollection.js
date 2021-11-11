import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useData from '../../hooks/useData';
import TopNavigation from '../../pages/Home/TopNavigation/TopNavigation';
import Car from '../Car/Car';

const AllCollection = () => {
    const cars = useData()
    return (
        <Box>
            <TopNavigation></TopNavigation>
            <Container>
                <Typography variant='h4' sx={{ fontWeight: '600', pt: 3 }}>
                    Our Collection
                    <hr style={{ width: '400px' }} />
                </Typography>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    {
                        cars?.map(car => <Car
                            key={car._id}
                            car={car}
                        ></Car>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default AllCollection;