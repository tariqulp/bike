import React from 'react';
import Products from '../../AddProduct/Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import BikeVideo from '../BikeVideo/BikeVideo';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner />
            <Products />
            <Review />
            <BikeVideo />
            <Footer />
        </div>
    );
};

export default Home;