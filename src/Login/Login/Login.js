import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink } from 'react-router-dom';
import login from '../../images/3094352.jpg'
import useAuth from '../../hooks/useAuth'

const Login = () => {
    const [userInfo, setUserInfo] = useState({})
    const { googleSignIn, signIn } = useAuth()
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

    const handleSignIn = e => {
        signIn(userInfo.email, userInfo.password)
        e.preventDefault()
    }
    return (
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
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;