import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const ShowReviews = (props) => {
    const { name, text, rating } = props.review;
    return (
        <div>
            <Col className='h-100'>
                <Card className='h-100'>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {text}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <span><p>Ratings</p>
                            <Rating
                                className="text-warning"
                                initialRating={rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly
                            ></Rating>
                            {/* <strong> ({rating})</strong> */}
                        </span>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default ShowReviews;