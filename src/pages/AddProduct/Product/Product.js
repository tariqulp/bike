import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, description, img, _id, price } = props.product;

    return (
        <div>
            <Col className='h-100'>
                <Card className='cards h-100'>
                    <Card.Img variant="top" src={img} style={{ height: "300px", borderRadius: "5px" }} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <strong style={{ fontFamily: 'cursive', color: 'tomato' }}>Price: ${price}</strong>
                            </div>
                            <div>
                                {props.delBtn ?

                                    <Button variant="outline-danger" onClick={() => props.handleDelete(_id)}>Delete Product</Button>
                                    :

                                    <Link to={`/orders/${_id}`}><Button variant="outline-dark">Purchase</Button></Link>
                                }
                            </div>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Product;