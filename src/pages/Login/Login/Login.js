import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Login = () => {

    const [loginData, SetLoginData] = useState({})
    const { loginUser, isLoading, user, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        SetLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    return (
        <div>
            <Header />
            <div className='container my-5'>
                <h1>LO<span style={{ fontFamily: 'cursive', color: 'tomato' }}>G</span>IN</h1>
                <Form onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control style={{ width: '50%', margin: 'auto' }}
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control style={{ width: '50%', margin: 'auto' }} name="password" type="password"
                            onChange={handleOnChange} placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        LOGIN
                    </Button> <br />
                    <NavLink to='/register'><Button variant="light">New User? Please Register</Button></NavLink>
                    {isLoading && <Spinner animation="border" variant="success" />}
                    {user?.email && <p className='text-success'>Login Successfully</p>}
                    {authError && <p className='text-danger'>{authError}</p>}
                </Form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;