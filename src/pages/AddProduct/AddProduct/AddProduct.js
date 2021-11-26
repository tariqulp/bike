import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProduct = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        // console.log(data)

        fetch('https://peaceful-castle-44201.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(data)


        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert("product added")
                reset()
            })
    };






    return (
        <div>
            <div className='container add-service'>
                <div>
                    <h1>Add <span className="text-danger" style={{ fontFamily: 'cursive' }}>Product</span></h1>
                </div>

                <div >
                    <div>
                        <form className="shipping-form service" onSubmit={handleSubmit(onSubmit)}>


                            <div>

                                <input placeholder="Name" className='my-2' style={{ width: '50%' }} defaultValue="" {...register("name")} required />
                            </div>
                            <div>

                                <input placeholder="Price" className='my-2' style={{ width: '50%' }} defaultValue="" {...register("price")} required />
                            </div>
                            <div>
                                <input style={{ width: '50%' }} placeholder="Description" className='my-2' defaultValue="" {...register("description")} required />
                            </div>
                            <div>
                                <input style={{ width: '50%' }} placeholder="Image URL" className='my-2' defaultValue="" {...register("img")} required />
                            </div>

                            <Button style={{ width: '30%' }} type='submit' variant="outline-success">Add Product</Button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddProduct;