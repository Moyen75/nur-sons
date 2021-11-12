import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink } from 'react-router-dom';
import login from '../../images/3094352.jpg'
import useAuth from '../../hooks/useAuth'
import TopNavigation from '../../pages/Home/TopNavigation/TopNavigation';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Login = () => {
    const [userInfo, setUserInfo] = useState({})
    const { googleSignIn, signIn, error } = useAuth()
    const location = useLocation()
    const history = useHistory()

    const handleInfo = e => {
        const field = e.target.name;
        const value = e.target.value
        const newInfo = { ...userInfo }
        newInfo[field] = value;
        setUserInfo(newInfo)
        console.log(newInfo)

    }
    // handle google sign in
    const handleGoogleSignIn = () => {
        googleSignIn(location, history)
    }

    // show error
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const handleSignIn = e => {
        signIn(userInfo.email, userInfo.password, location, history)
        setOpen(true);
        e.preventDefault()
    }
    return (
        <>
            <TopNavigation></TopNavigation>
            <Container>

                <Grid container spacing={2}>
                    <Grid sx={{ xs: { display: 'none' } }} item xs={12} sm={6} md={6}>
                        <img style={{ width: '80%' }} src={login} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box>
                            <Typography variant='h4'>
                                Please Login
                            </Typography>
                            <form onSubmit={handleSignIn}>
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    name='email'
                                    sx={{ width: "75%", m: 1 }}
                                    onBlur={handleInfo}
                                    variant="outlined" />
                                <TextField
                                    id="outlined-basic"
                                    label="Password"
                                    name='password'
                                    sx={{ width: "75%", m: 1 }}
                                    onBlur={handleInfo}
                                    variant="outlined" />
                                <Button sx={{ width: "75%", m: 1 }} variant='contained' type='submit'>sign in</Button>

                            </form>
                            <NavLink style={{ textDecoration: 'none', fontSize: 20 }} to='/register'>New user?Register Now</NavLink>
                            <Typography >Or you can join with</Typography>
                            <Button onClick={handleGoogleSignIn} variant='contained' sx={{ color: 'yellow' }}><GoogleIcon /> </Button>
                        </Box>
                        {
                            error && <Snackbar
                                open={open}
                                autoHideDuration={6000}
                                onClose={handleClose}
                                message={error}
                                action={action}
                            />
                        }
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Login;