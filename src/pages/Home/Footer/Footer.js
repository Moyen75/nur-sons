import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import bg from '../../../images/pure-white-background-85a2a7fd.jpg'

const setBg = {
    background: `url(${bg})`,
    backgroundColor: "rgba(31, 32, 32 ,0.7)",
    backgroundBlendMode: ' darken, luminosity'
}

const Footer = () => {
    return (
        <Box>
            <Container>
                <Box sx={{ mt: 14, mb: 14 }}>
                    <Typography variant='h4'>
                        Get our latest news and special sales
                    </Typography>
                    <Typography>
                        You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.
                    </Typography>
                    <TextField
                        id="standard-basic"
                        label="Email"
                        sx={{ width: '30%' }}
                        variant="standard" />
                    <Button variant='contained' sx={{ backgroundColor: '#1CEDC5 ', p: 1, m: 1 }}>Subscribe Now</Button>
                </Box>
            </Container>

            <Box style={setBg} sx={{ pb: 2 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={3} sx={{ textAlign: 'justify', mt: 3, display: 'flex', justifyContent: 'center', color: 'white' }}>
                            <Box>
                                <Typography variant='h6' sx={{ mb: 1, fontWeight: 500 , color: 'black'}}>
                                    Your Account
                                </Typography>
                                <Typography>
                                    Personal info
                                </Typography>
                                <Typography>
                                    My orders
                                </Typography>
                                <Typography>
                                    Address
                                </Typography>
                            </Box>

                        </Grid>
                        <Grid item xs={6} md={3} sx={{ textAlign: 'justify', mt: 3, display: 'flex', justifyContent: 'center', color: 'white' }}>
                            <Box>
                                <Typography variant='h6' sx={{ mb: 1, fontWeight: 500 , color: 'black'}}>
                                    Our Company
                                </Typography>
                                <Typography>
                                    Delivery Info
                                </Typography>
                                <Typography>
                                    Legal Notice
                                </Typography>
                                <Typography>
                                    About Us
                                </Typography>
                                <Typography>
                                    Contact Us
                                </Typography>
                                <Typography>
                                    Terms And Conditions
                                </Typography>
                            </Box>

                        </Grid>
                        <Grid item xs={6} md={3} sx={{ textAlign: 'justify', mt: 3, display: 'flex', justifyContent: 'center', color: 'white' }}>
                            <Box>
                                <Typography variant='h6' sx={{ mb: 1, fontWeight: 500 , color: 'black'}}>
                                    Customer Service
                                </Typography>
                                <Typography>
                                    Monday to Friday
                                </Typography>
                                <Typography>
                                    10.00am - 6.30pm
                                </Typography>
                                <Typography>
                                    (NewYork time)
                                </Typography>
                                <Typography>
                                    <AddIcCallIcon sx={{ mb: -1 }} />205098894
                                </Typography>
                            </Box>

                        </Grid>
                        <Grid item xs={6} md={3} sx={{ textAlign: 'justify', mt: 3, display: 'flex', justifyContent: 'center', color: 'black' }}>
                            <Box>
                                <Typography variant='h6' sx={{ mb: 1, fontWeight: 500 , color: 'black'}}>
                                    Social Networks
                                </Typography>
                                <Typography>
                                    <FacebookIcon />
                                    <InstagramIcon />
                                    <TwitterIcon />
                                </Typography>
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
            <Box sx={{ backgroundColor: 'black', color: 'white' }}>
                <Typography>
                    &copy;2021, Alright Reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;