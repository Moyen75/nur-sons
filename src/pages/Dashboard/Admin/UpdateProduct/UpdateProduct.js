import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const UpdateProduct = ({ open, handleClose, car }) => {
    const { name, price, img, rating, model, description, oil, gear, speed } = car;
    const carInfo = { name, price, img, rating, model, description, oil, gear, speed }
    const [updateInfo, setUpdateInfo] = useState(carInfo)
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const updatedInfo = { ...updateInfo }
        updatedInfo[field] = value;
        setUpdateInfo(updatedInfo)
        console.log(updateInfo)
    }

    const handleOnSubmit = e => {
        fetch(`https://arcane-meadow-17287.herokuapp.com/cars/${car._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Product updated successfully.')
                    handleClose()
                }
            })
        e.preventDefault()
    }
    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant='h4'>
                        Update car Details
                    </Typography>
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            id="standard-basic"
                            label="name"
                            name='name'
                            sx={{ width: '100%' }}
                            defaultValue={car.name}
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            id="standard-basic"
                            label="Auto or manual"
                            name='gear'
                            sx={{ width: '100%' }}
                            defaultValue={car.gear}
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            id="standard-basic"
                            label="img url"
                            name='img'
                            sx={{ width: '100%' }}
                            defaultValue={car.img}
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            id="standard-basic"
                            label="Model"
                            name='model'
                            sx={{ width: '100%' }}
                            defaultValue={car.model}
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            id="standard-basic"
                            label="Fuel or cng"
                            name='oil'
                            sx={{ width: '100%' }}
                            defaultValue={car.oil}
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            id="standard-basic"
                            label="price"
                            name='price'
                            sx={{ width: '100%' }}
                            defaultValue={car.price}
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            id="standard-basic"
                            label="Rating"
                            name='rating'
                            sx={{ width: '100%' }}
                            defaultValue={car.rating}
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            id="standard-basic"
                            label="speed"
                            name='speed'
                            sx={{ width: '100%' }}
                            defaultValue={car.speed}
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            id="filled-multiline-static"
                            label="Details"
                            name='description'
                            onBlur={handleOnBlur}
                            multiline
                            sx={{ width: '100%', mt: 1 }}
                            rows={4}
                            defaultValue={car.description}
                            variant="filled"
                        />
                        <Button sx={{ width: '100%', mt: 1 }} variant='contained' type="submit">update</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default UpdateProduct;