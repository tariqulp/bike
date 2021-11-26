import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth'

const AddReview = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();





    const onSubmit = data => {
        console.log(data)

        fetch('https://peaceful-castle-44201.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(data)


        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert("review added")
                reset()
            })
    };
    return (
        <div >
            <div>
                <h1>Add <span className="text-danger" style={{ fontFamily: 'cursive' }}>Review</span></h1>
            </div>
            <div className='container add-service' >
                <form className="form mt-3 service" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit(onSubmit)}>

                    <input style={{ width: '50%', marginBottom: '10px', borderRadius: '8px' }} defaultValue={user.displayName} {...register("name")} />

                    <input style={{ width: '50%', marginBottom: '10px', borderRadius: '8px' }} defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input style={{ width: '50%', marginBottom: '10px', borderRadius: '8px' }} placeholder="text" maxLength="60" defaultValue="" {...register("text")} />
                    <input style={{ width: '50%', marginBottom: '10px', borderRadius: '8px' }} type="number" min="0" step="0.01" max="5" placeholder="rating 0-5" defaultValue="" {...register("rating")} />


                    <Button style={{ width: '30%' }} type='submit' variant="outline-success">Add Review</Button>
                </form>



            </div>
        </div>
    );
};

export default AddReview;