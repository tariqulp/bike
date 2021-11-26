import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    Switch,
    Link,
    useRouteMatch
} from "react-router-dom";
import ManageAllProduct from '../../AddProduct/ManageAllProduct/ManageAllProduct'
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import useAuth from '../../../hooks/useAuth';
import ManageAllOrder from '../../Order/ManageAllOrder/ManageAllOrder';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import logo from '../../../assets/images/logo.png'
import AddProduct from '../../AddProduct/AddProduct/AddProduct';
import DashboardHome from '../DashboardHome/DashboardHome';
import AddReview from '../AddReview/AddReview';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import MyOrder from '../../Order/MyOrder/MyOrder';


const drawerWidth = 230;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, user, logOut } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <img style={{ width: '50%' }} src={logo} alt="" />
                <h3>Bi<span style={{ color: '#1b804f' }}>ke</span></h3>
            </Toolbar>
            <Divider />
            <List style={{ backgroundColor: "#212529", opacity: '0.9' }} >

                <Link style={{ textDecoration: "none", color: 'white' }} to='/home'><Button variant="outlined" color="inherit" sx={{ paddingRight: 2, alignItems: 'self-start', marginTop: '1rem' }}><HomeRoundedIcon color="dark" fontSize='medium' />Home</Button></Link><br />

                {/* <Divider sx={{ color: 'white' }} /> */}

                {!admin && <Box>
                    <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}`}><Button variant="outlined" sx={{ marginTop: '1rem' }} color="inherit"><AccountBalanceWalletRoundedIcon />Pay</Button></Link><br />

                    <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/addreview`}><Button variant="outlined" sx={{ marginTop: '1rem' }} color="inherit"><VisibilityRoundedIcon />Add Review</Button></Link><br />

                    <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/myorder`}><Button variant="outlined" sx={{ marginTop: '1rem' }} color="inherit"><ShoppingBasketRoundedIcon />My Order</Button></Link>
                </Box>}

                {/* <Divider sx={{ color: 'white' }} /> */}
            </List>
            {admin && <Box>
                <List style={{ backgroundColor: "#212529", opacity: '0.9' }}>

                    <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/manageproduct`}><Button variant="outlined" color="inherit" sx={{ paddingLeft: 2, alignItems: 'center' }}><ProductionQuantityLimitsRoundedIcon />Manage All Product</Button></Link>

                    {/* <Divider sx={{ color: 'white' }} /> */}

                    <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/manageall`}><Button variant="outlined" sx={{ marginTop: '1rem' }} color="inherit"><ProductionQuantityLimitsRoundedIcon />Manage All Order</Button></Link>

                    {/* <Divider sx={{ color: 'white' }} /> */}


                    <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/addproduct`}><Button variant="outlined" sx={{ marginTop: '1rem' }} color="inherit"><ProductionQuantityLimitsRoundedIcon />Add A Product</Button></Link>

                    {/* <Divider sx={{ color: 'white' }} /> */}

                    <Link style={{ textDecoration: "none", color: 'white' }} to={`${url}/makeadmin`}><Button variant="outlined" sx={{ marginTop: '1rem' }} color="inherit"><AdminPanelSettingsRoundedIcon />Make Admin</Button></Link>

                    {/* <Divider sx={{ color: 'white' }} /> */}
                </List>
            </Box>}
            <List style={{ backgroundColor: "#212529", opacity: '0.9', color: ' white' }}>
                {user.email ?

                    (<Button variant="outlined" style={{ color: ' white', textDecoration: "none" }} onClick={logOut}><ExitToAppRoundedIcon />LogOut</Button>)
                    :
                    <Link style={{ color: ' white', textDecoration: "none" }} to='login'><Button variant="outlined"><PersonRoundedIcon />Login</Button></Link>

                }
            </List>
            {/* <List>
                {['HomeRoundedIcon', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <HomeRoundedIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                style={{ backgroundColor: "#212529", opacity: '0.9' }}
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
                    <PrivateRoute exact path={path}>
                        <DashboardHome />
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/addreview`}>
                        <AddReview />
                    </PrivateRoute>

                    <PrivateRoute path={`${path}/myorder`}>
                        <MyOrder />
                    </PrivateRoute>
                    <AdminRoute path={`${path}/manageproduct`}>
                        <ManageAllProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageall`}>
                        <ManageAllOrder />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin />
                    </AdminRoute>
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
