import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const TopNavigation = () => {
    const { user, logout } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#C6C1AA' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ color: 'black' }} > Nur & sons Auto</Typography>

                    <Typography component="div" sx={{ flexGrow: 1 }}>
                        <NavLink style={{ textDecoration: 'none', marginRight: '10px' }} to="/">Home</NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to="/allCollection"> Collections</NavLink>
                        {user.email && <NavLink style={{ textDecoration: 'none' }} to="/dashboard"> Dashboard</NavLink>}

                    </Typography>
                    {user?.email && <Button onClick={logout}>Log out</Button>}
                    {user?.email ? <Box>
                        <Typography>
                            logged in as:{user.displayName}
                        </Typography>
                    </Box> : <NavLink style={{ textDecoration: 'none' }} to='/login'>
                        Login
                    </NavLink>}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default TopNavigation;