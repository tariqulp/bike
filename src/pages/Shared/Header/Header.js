import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    // active style for nav
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            {/* navbar section */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home">Bi<span className="text-success">ke</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/explore">Explore</Nav.Link>

                            {/* this button are showing only when user logged in */}
                            {

                                (user.email) ?

                                    <>
                                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/dashboard">Dashboard</Nav.Link>

                                    </>


                                    :
                                    ''
                            }
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">
                        {/* <Navbar.Text> */}
                        {
                            (user.email && <p className='mx-5 my-1' style={{ color: 'white' }}><span style={{ fontFamily: 'cursive' }}>SignIn as : </span> {user.displayName}</p>)
                        }
                        {/* </Navbar.Text> */}
                        {
                            user.email ? (<Button onClick={logOut} variant="outline-light" className=' p-1'>Sign out</Button>) :
                                (<Link to='/login'>
                                    <Button variant="outline-light" className=' p-1'>Sign In</Button>
                                </Link>)
                        }


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    );
};

export default Header;