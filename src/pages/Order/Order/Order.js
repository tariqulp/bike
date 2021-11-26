import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import useProducts from '../../../hooks/useProducts';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Order.css'

const Order = () => {
    const history = useHistory();
    const { productId } = useParams();
    const { products } = useProducts();

    let productToShow = products?.filter(service => service._id == productId)
    // console.log("details of", serviceToShow)


    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {

        const savedCart = productToShow;
        data.cart = savedCart;
        fetch('https://peaceful-castle-44201.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(data)


        })
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                alert("order placed")
                reset()
                history.replace('/dashboard')
            })
    };
    return (
        <div>
            <Header />
            <div className='container my-5 order'>

                <div className="row">
                    <h1 className="mb-5">Boo<span className="text-danger">king</span></h1>
                    <div className="col col-md-6">

                        <div className="card mb-3">
                            <img src={productToShow[0]?.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{productToShow[0]?.name}</h5>
                                <p className="card-text">{productToShow[0]?.description}</p>

                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6 m-auto">

                        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)} style={{ backgroundColor: "rgb(236, 234, 234)" }}>
                            <h1>Add Purchase details</h1>

                            <input defaultValue={user.displayName} {...register("name")} placeholder="Name" /> <br />

                            <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Email" />
                            {errors.email && <span className="error">This field is required</span>} <br />

                            <input placeholder="Address" defaultValue="" {...register("address")} /><br />
                            <input placeholder="City" defaultValue="" {...register("city")} /><br />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} /><br />

                            <input type="submit" />
                        </form>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Order;