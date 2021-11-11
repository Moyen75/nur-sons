import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner from '../../../images/banner_4_680x397_crop_top.png'

const About = () => {
    return (
        <Container sx={{mt:10}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography variant='h6'>
                            Welcome!
                        </Typography>
                        <Typography variant='h4'>
                            About Our Store
                        </Typography>
                        <Typography sx={{ textAlign: 'justify' }}>
                            For 25 years, we raising the standard of used car retailing with one of the most innovative and reliable used vehicle programmes ever created. A comprehensive range of benefits as standard has evolved over time and, today, drivers can leave the forecourt with total reassurance and peace of mind.
                        </Typography>
                        <Button variant='contained' sx={{ backgroundColor: 'tomato' }}>Shop now</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={banner} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default About;