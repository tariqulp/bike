import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../../assets/images/notFound.gif'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const NotFound = () => {
    return (
        <div style={{ backgroundColor: '#f7f9fb' }}>
            <Header />
            <div className="container my-5">
                <div>
                    <img style={{ width: "50%" }} src={notfound} alt="" />
                </div>
                <div>
                    <Link to='/home'><Button variant='outline-success'>Back to home</Button></Link>
                </div>
            </div>
            <Footer />

        </div>
    );
};

export default NotFound;