import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Redirect, Route } from 'react-router';
// import useUser from '../../../../hooks/useUser';
import useAuth from '../../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user,  isAdmin } = useAuth()
    // const currentUser=useUser()
    if (!isAdmin) {
        return <CircularProgress />

    }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email && isAdmin ? children : <Redirect
                to={{
                    pathname: "/home",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default AdminRoute;