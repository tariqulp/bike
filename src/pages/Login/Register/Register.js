import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Register = () => {

    const [loginData, SetLoginData] = useState({})
    const history = useHistory();
    const { registerUser, isLoading, user, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        SetLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your Password did not match")
        }
        registerUser(loginData?.email, loginData?.password, loginData?.name, history)
        e.preventDefault();
    }

    return (
        <div>
            <Header />
            <div className='container my-5'>

                <h1>RE<span style={{ fontFamily: 'cursive', color: 'tomato' }}>G</span>ISTER</h1>
                <form onSubmit={handleLoginSubmit}>
                    <Form.Control style={{ width: '50%', margin: 'auto' }} name="name" onBlur={handleOnBlur} type="text" placeholder="Name" /> <br />
                    <Form.Control style={{ width: '50%', margin: 'auto' }} name="email" onBlur={handleOnBlur} type="email" placeholder="Your Email" /> <br />
                    <Form.Control style={{ width: '50%', margin: 'auto' }} name="password" onBlur={handleOnBlur} type="password" placeholder="Password" /> <br />
                    <Form.Control style={{ width: '50%', margin: 'auto' }} name="password2" onBlur={handleOnBlur} type="password" placeholder="Re-Enter Password" /> <br />
                    <Button variant="primary" type="submit">REGISTER</Button> <br />
                    <NavLink to='/login'><Button variant="light">Already Register? Please Login</Button></NavLink>
                    {isLoading && <Spinner animation="border" variant="success" />}
                    {user?.email && <p className='text-success'>Account created successfully</p>}
                    {authError && <p className='text-danger'>{authError}</p>}
                </form>

            </div >
            <Footer />
        </div>
    );
};

export default Register;