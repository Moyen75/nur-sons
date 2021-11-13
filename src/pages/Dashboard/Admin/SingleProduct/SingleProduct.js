import { Button, CardMedia, Grid, Paper, Rating, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import UpdateProduct from '../UpdateProduct/UpdateProduct';

const SingleProduct = ({ car }) => {
    const { img, name, price, description, rating, _id } = car;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleDeleteProduct = (id) => {
        const process = window.confirm('Are you sure to delete this Car??')
        if (process) {
            fetch(`https://arcane-meadow-17287.herokuapp.com/cars/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product deleted successfully')
                    }
                    console.log(data)
                })
        }
    }
    return (
        <>
            <Grid item xs={12} md={6}>
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
                    <Button variant='contained' sx={{ width: '45%', mb: 1 }} onClick={handleOpen}>Update</Button>

                    <Button onClick={() => handleDeleteProduct(_id)} variant='contained' sx={{ width: '45%', marginLeft: 1, mb: 1 }}>Delete</Button>
                </Paper>

            </Grid>
            <UpdateProduct
                car={car}
                open={open}
                handleClose={handleClose}
            ></UpdateProduct>
        </>
    );
};

export default SingleProduct;