import {  Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useUsers from '../../../../hooks/useUsers';

const Users = () => {
    const users = useUsers()
    return (
        <Box>
            <Typography variant='h4' sx={{ textAlign: 'left' }}>
                All users
            </Typography>
            {users?.map(user => <li style={{ textAlign: "left", listStyle: "none" }}>{user.email}</li>)}
        </Box>
    );
};

export default Users;