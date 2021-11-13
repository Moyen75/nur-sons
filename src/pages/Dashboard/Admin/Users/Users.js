import { Button, TableCell, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useUsers from '../../../../hooks/useUsers';

const Users = () => {
    const users = useUsers()

    const handleDelete = id => {
        const process = window.confirm('Are you sure to delete this user??')
        if (process) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('user deleted successfully.')
                    }
                })
        }
    }
    return (
        <Box>
            <Typography variant='h4' sx={{ textAlign: 'left' }}>
                All users
            </Typography>
            {users?.map(user => <TableRow>
                <TableCell> {user.email}</TableCell>
                {user.role && <TableCell>{user.role}</TableCell>}
                {!user.role && <TableCell> <Button onClick={() => handleDelete(user._id)}>Delete</Button> </TableCell>}
            </TableRow>)}
        </Box>
    );
};

export default Users;