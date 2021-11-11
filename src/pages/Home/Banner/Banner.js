import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/red-luxury-sedan-road.jpg'

const bannerBg = {
    background: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(45, 57, 55 ,0.8)',
    backgroundBlendMode: ' darken, luminosity'
}

const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ mt: 2, minHeight: '400px' }}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={5} sx={{ maxWidth: '400px', textAlign: 'left', color: 'white', mt: 10, ml: 6 }}>
                    <Box sx={{}}>
                        <Typography variant='h4' sx={{ fontWeight: '500' }}>
                            THE BEST CAR
                            <br />
                             DEALER
                        </Typography>
                        <Typography sx={{maxWidth:'350px'}}>
                            We offer high quality vehicles at unbelievable

                            prices & creates pleasant buying experience.
                        </Typography>
                        <Button variant='contained' sx={{ backgroundColor: '#2A9D8C' }}>GET APPOINTMENT</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Banner;