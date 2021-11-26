import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Product from '../Product/Product';

const ManageAllProduct = () => {
    const [products, setProducts] = useState([])
    const { setIsLoading } = useAuth()
    const delBtn = true;
    useEffect(() => {
        setIsLoading(true)
        fetch('https://peaceful-castle-44201.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        setIsLoading(false)
    }, [])

    const handleDelete = (_id) => {
        const proced = window.confirm('Are you sure, you want to delete?')
        if (proced) {

            const url = `https://peaceful-castle-44201.herokuapp.com/products/delete/${_id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Deleted SuccessFully");
                        const remainingProducts = products.filter((product) => product._id !== _id);
                        setProducts(remainingProducts);
                    }
                });


        }
    }

    if (setIsLoading === true) {
        return <Spinner animation="border" variant="success" />
    }
    return (
        <div>
            {/* <Header></Header> */}
            <div className='container' style={{ padding: '10px' }}>
                <h1 className='my-5'>Our <span className='text-danger'>Products</span></h1>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(product => <Product key={product._id} product={product} handleDelete={handleDelete} delBtn={delBtn} />)
                    }
                </Row>
            </div>
        </div>
    );
};

export default ManageAllProduct;