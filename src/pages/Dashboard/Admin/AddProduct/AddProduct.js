import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';


const AddProduct = () => {
    const carInfo = { name: '', price: '', description: '', img: '', speed: '', gear: '', model: '', oil: '', rating: "" }
    const [addProduct, setAddProduct] = useState(carInfo)
    const history = useHistory()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...addProduct }
        newProduct[field] = value;
        setAddProduct(newProduct)
        console.log(addProduct)
    }

    const handleAddProduct = e => {
        fetch('http://localhost:5000/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Car added successfully.')
                    history.push('/dashboard')
                }
                console.log(data)
            })
        e.preventDefault()
    }
    return (
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={12} md={6}>
                <Typography variant='h4'>
                    Add a Car
                </Typography>
                <form onSubmit={handleAddProduct}>
                    <TextField
                        id="standard-basic"
                        label="Car name"
                        name='name'
                        required
                        onBlur={handleOnBlur}
                        sx={{ width: '75%' }}
                        variant="standard" />
                    <TextField
                        id="standard-basic"
                        label="Price"
                        required
                        name='price'
                        onBlur={handleOnBlur}
                        sx={{ width: '75%' }}
                        variant="standard" />
                    <TextField
                        id="standard-basic"
                        label="Car Model"
                        name='model'
                        onBlur={handleOnBlur}
                        required
                        sx={{ width: '75%' }}
                        variant="standard" />
                    <TextField
                        id="standard-basic"
                        label="speed"
                        name='speed'
                        onBlur={handleOnBlur}
                        required
                        sx={{ width: '75%' }}
                        variant="standard" />
                    <TextField
                        id="standard-basic"
                        label="fuel or gas"
                        name="oil"
                        onBlur={handleOnBlur}
                        required
                        sx={{ width: '75%' }}
                        variant="standard" />
                    <TextField
                        id="standard-basic"
                        name='gear'
                        onBlur={handleOnBlur}
                        required
                        label="Auto or manual"
                        sx={{ width: '75%' }}
                        variant="standard" />
                    <TextField
                        id="standard-basic"
                        label="Rating"
                        required
                        onBlur={handleOnBlur}
                        name='rating'
                        sx={{ width: '75%' }}
                        variant="standard" />
                    <TextField
                        id="standard-basic"
                        label="img url"
                        onBlur={handleOnBlur}
                        required
                        name='img'
                        sx={{ width: '75%' }}
                        variant="standard" />
                    <TextField
                        id="filled-multiline-static"
                        label="Details"
                        required
                        onBlur={handleOnBlur}
                        name='description'
                        sx={{ width: '75%', mt: 1 }}
                        multiline
                        variant="filled"
                        rows={4}
                    />
                    <Button sx={{ width: '75%', mt: 1 }} variant='contained' type='submit'>Add Car</Button>
                </form>
            </Grid>
        </Container>
    );
};

export default AddProduct;