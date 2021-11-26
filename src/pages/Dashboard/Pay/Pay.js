import React from 'react';
import bg from '../../../assets/images/pay-bg.png'

const Pay = () => {
    return (
        <div>
            <h1><span style={{ color: 'yellowgreen' }}>Pay</span>ment <span style={{ color: 'tomato' }}>System</span></h1>
            <img src={bg} alt="" style={{ width: '50%' }} />
        </div>
    );
};

export default Pay;