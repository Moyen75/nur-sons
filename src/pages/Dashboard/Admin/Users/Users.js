import { TableCell, TableRow, Typography } from '@mui/material';
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
            {users?.map(user => <TableRow>
                <TableCell> {user.email}</TableCell>
                {user.role && <TableCell>{user.role}</TableCell>}
            </TableRow>)}
        </Box>
    );
};

export default Users;