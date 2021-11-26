import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import ShowOrder from '../ShowOrder/ShowOrder';
import { Row } from 'react-bootstrap';

const MyOrder = () => {



    const [myOrders, setMyOrders] = useState([])

    const { user } = useAuth();
    // const [showBtn,setShowBtn] = useState(false)
    const showBtn = false;






    useEffect(() => {
        fetch(`https://peaceful-castle-44201.herokuapp.com/order/myorder?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))

    }, [])

    // const check = myOrders.filter(myOrder=>myOrder.email==user.email)





    const handleDelete = (_id) => {
        const proceed = window.confirm("Are you sure You want to delete ? ");
        if (proceed) {

            const url = `https://peaceful-castle-44201.herokuapp.com/order/delete/${_id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert("Deleted SuccessFully");
                        const remainingUsers = myOrders.filter((user) => user._id !== _id);
                        setMyOrders(remainingUsers);
                    }

                })

        }

    }

    return (
        <div>
            <div className='container'>
                <Row xs={1} md={2} className="g-2">

                    {
                        myOrders?.map(order => <ShowOrder key={order._id} order={order} handleDelete={handleDelete} showBtn={showBtn}></ShowOrder>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default MyOrder;