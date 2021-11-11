import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink } from 'react-router-dom';
import login from '../../images/4826435.jpg'
import useAuth from '../../hooks/useAuth'

const Register = () => {
    const [userInfo, setUserInfo] = useState({})
    const history = useHistory()
    const { createUser } = useAuth()

    const handleInfo = e => {
        const field = e.target.name;
        const value = e.target.value
        const newInfo = { ...userInfo }
        newInfo[field] = value;
        setUserInfo(newInfo)
        console.log(newInfo)

    }

    const handleSignIn = e => {

        e.preventDefault()
        createUser(userInfo.email, userInfo.password, history)
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Typography variant='h4'>
                            Create Account
                        </Typography>
                        <form onSubmit={handleSignIn}>
                            <TextField
                                id="outlined-basic"
                                label="Name"
                                name='name'
                                sx={{ width: "75%", m: 1 }}
                                onBlur={handleInfo}
                                variant="outlined" />
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                name='email'
                                type='email'
                                sx={{ width: "75%", m: 1 }}
                                onBlur={handleInfo}
                                variant="outlined" />
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                name='password'
                                type='password'
                                sx={{ width: "75%", m: 1 }}
                                onBlur={handleInfo}
                                variant="outlined" />
                            <TextField
                                id="outlined-basic"
                                label="Retype Password"
                                name='password2'
                                type='password'
                                sx={{ width: "75%", m: 1 }}
                                onBlur={handleInfo}
                                variant="outlined" />
                            <Button sx={{ width: "75%", m: 1 }} variant='contained' type='submit'>Register</Button>

                        </form>
                        <NavLink style={{ textDecoration: 'none', fontSize: 20 }} to='/login'>Already registered?sign in</NavLink>
                        <Typography >Or you can join with</Typography>
                        <Button variant='contained' sx={{ color: 'yellow' }}><GoogleIcon /> </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box sx={{ xs: { display: 'none' } }}><img style={{ width: '80%' }} src={login} alt="" /></Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;