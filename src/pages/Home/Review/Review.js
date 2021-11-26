import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowReviews from '../ShowReviews/ShowReviews';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://peaceful-castle-44201.herokuapp.com/home/review')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    return (
        <div className='container my-5'>
            <h1 className='my-5'>Customer <span className='text-danger' style={{ fontFamily: 'cursive' }}>Reviews</span></h1>
            <Row xs={1} md={3} className="g-4">

                {
                    reviews?.map(review => <ShowReviews key={review._id} review={review}></ShowReviews>)
                }

            </Row>
        </div>
    );
};

export default Review;