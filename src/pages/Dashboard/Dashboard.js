import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import MyOrders from './MyOrders/MyOrders';
import Review from './Review/Review';
import Payment from './Payment/Payment';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import ManageOrders from './ManageOrders/ManageOrders';
import AdminRoute from './Admin/AdminRoute/AdminRoute';
import ReviewsIcon from '@mui/icons-material/Reviews';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PaymentIcon from '@mui/icons-material/Payment';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import AddBoxIcon from '@mui/icons-material/AddBox';
import UpdateIcon from '@mui/icons-material/Update';
import AddProduct from './Admin/AddProduct/AddProduct';

const drawerWidth = 240;



function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { logout, isAdmin } = useAuth()



    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar >
                <Typography variant='h5'>
                    Nur & sons Auto
                </Typography>
            </Toolbar>
            <Divider />
            <Box sx={{ textAlign: 'left', marginLeft: 3 }}>
                {isAdmin ? <Box><NavLink style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}><AdminPanelSettingsIcon />Make Admin</NavLink>
                    <br />
                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/manage`}><ManageAccountsIcon />Manage All Orders</NavLink>
                    <br />
                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/addProduct`}><AddBoxIcon />Add product</NavLink>
                    <br />
                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/manage`}><UpdateIcon />Manage Products</NavLink>
                    <br /></Box> : <Box>
                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/myOrders`}><EventNoteIcon />My orders</NavLink>
                    <br />
                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/review`}><ReviewsIcon />Review</NavLink>
                    <br />
                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/payment`}><PaymentIcon />Payment</NavLink>
                    <br />
                </Box>

                }
                <Button onClick={logout}><LogoutIcon />Log out</Button>
            </Box>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', marginLeft: 100, color: 'white' }} to='/'>HomePage</NavLink>
                </Toolbar>

            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    {isAdmin ? <Box>
                        <AdminRoute exact path={path}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manage`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                    </Box> : <Box>

                        <Route exact path={path}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                    </Box>

                    }
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
