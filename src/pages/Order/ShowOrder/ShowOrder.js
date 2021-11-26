import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ShowOrder = (props) => {
    const { name, img, description } = props.order.cart[0];
    const { _id, status } = props.order;
    return (
        <div className="my-3 mx-auto " >
            <div className="card  mx-auto h-100" style={{ maxWidth: '540px' }}>
                <div className="row g-0 h-100">
                    <div className="col-md-4">
                        <img src={img} style={{ height: "100%", borderRadius: "5px" }} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 h-100">
                        <div className="card-body">
                            <h5 className="card-title"><strong>{name}</strong></h5>
                            <p className="card-text">{description}</p>
                            <strong className="card-text"><small>Ordered by:{props.order.name}</small></strong>
                            {
                                status == true ? <strong className="card-text"><small style={{ display: 'block' }}>Status:Shipped</small></strong> :
                                    <p className="card-text"><small >Status:Pending</small></p>

                            }


                        </div>

                        <Card.Footer style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Button variant="outline-danger" className='mx-auto my-auto' onClick={() => props.handleDelete(_id)} >Cancel Order</Button>

                            {
                                props.showBtn == true ? <Button variant="success" className="mx-auto my-auto" onClick={() => props.handleStatus(_id)}>Approve</Button> :
                                    ''
                            }
                        </Card.Footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowOrder;