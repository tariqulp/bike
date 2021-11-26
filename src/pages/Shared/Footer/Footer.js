import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-blue' style={{ marginTop: '300px' }}>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                {/* added link bacause each text go to the route */}
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/explore">Explore</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                {/* added link bacause each text go to the route */}
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/explore">Explore</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Bike</h3>
                            <p>“A journey of a thousand miles begins with a single step”</p>
                        </div>

                    </div>
                    <p className="copyright">Bike © 2021</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;