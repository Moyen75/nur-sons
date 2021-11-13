import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useData from '../../../../hooks/useData';
import SingleProduct from '../SingleProduct/SingleProduct';

const ManageProduct = () => {
    const cars=useData()
    return (
        <Container>
            <Typography variant='h4' sx={{mb:2}}>
                Manage All Product
            </Typography>
            <Grid container spacing={2}>
               {cars?.map(car=><SingleProduct
               key={car._id}
               car={car}
               ></SingleProduct>)}
            </Grid>
        </Container>
    );
};

export default ManageProduct;