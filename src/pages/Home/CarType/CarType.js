import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import banner1 from '../../../images/banner_2_895x700_crop_center.png'
import banner2 from '../../../images/banner_3_895x700_crop_center.png'


const CarType = () => {
    return (
        <Container sx={{mt:2}}>
            <Typography variant='h4' sx={{mb:2}}>
                Upcoming features
                <hr style={{ width: '300px', textAlign: 'center' }} />
            </Typography>
            
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                    <img style={{ width: '100%' }} src={banner1} alt="" />
                    <Typography variant='h4' sx={{ fontWeight: '500' }}>
                        New Cars
                    </Typography>
                    <Typography>
                        Wide range of brands
                    </Typography>
                    <Button variant='contained' sx={{ backgroundColor: 'tomato' }}>Get Now</Button>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <img style={{ width: '100%' }} src={banner2} alt="" />
                    <Typography variant='h4' sx={{ fontWeight: '500' }}>
                        Used Cars
                    </Typography>
                    <Typography>
                        Up to 40% discount
                    </Typography>
                    <Button variant='contained' sx={{ backgroundColor: 'tomato' }}>Get Now</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CarType;