import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer'
import Product from '../Product/Product';

const Explore = () => {
    const [products, setProducts] = useState([])
    const { setIsLoading } = useAuth()
    const delBtn = false;
    useEffect(() => {
        setIsLoading(true)
        fetch('https://peaceful-castle-44201.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        setIsLoading(false)
    }, [])

    if (setIsLoading === true) {
        return <Spinner animation="border" variant="success" />
    }
    return (
        <div>
            <Header></Header>
            <div className='container' style={{ padding: '10px' }}>
                <h1 className='my-5'>Our <span className='text-danger'>Products</span></h1>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(product => <Product key={product._id} product={product} delBtn={delBtn} />)
                    }
                </Row>
            </div>
            <Footer />
        </div>
    );
};

export default Explore;