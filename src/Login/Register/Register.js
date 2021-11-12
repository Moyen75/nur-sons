import { Button, Container, Grid, IconButton, Snackbar, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import login from '../../images/4826435.jpg'
import useAuth from '../../hooks/useAuth'
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';


const Register = (props) => {
    const [userInfo, setUserInfo] = useState({})
    const history = useHistory()
    const { createUser, user, error, isLoading } = useAuth()
    const [open, setOpen] = React.useState(false);


    console.log('console log for user', user)
    const handleInfo = e => {
        const field = e.target.name;
        const value = e.target.value
        const newInfo = { ...userInfo }
        newInfo[field] = value;
        setUserInfo(newInfo)
        console.log(newInfo)

    }
    // show error 


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
        e.preventDefault()
        if (userInfo.password !== userInfo.password2) {
            alert(`password didn't matched.`)
            return
        }
        createUser(userInfo.email, userInfo.password, userInfo.name, history)
        setOpen(true);
    }
    return (
        <Container>
            {isLoading===true && <CircularProgress />   }
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
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box sx={{ xs: { display: 'none' } }}><img style={{ width: '80%' }} src={login} alt="" /></Box>
                </Grid>
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
        </Container>
    );
};

export default Register;