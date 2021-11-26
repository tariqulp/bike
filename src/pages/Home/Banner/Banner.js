import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../assets/images/banner.gif'

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item >
          <img

            className="d-block w-100"
            src={banner}
            alt="First slide"
          />
          <Carousel.Caption style={{

            top: '50%',
            transform: 'translateY(-50%)', backgroundSize: 'cover'
          }}>
            <h1 style={{ fontWeight: '800' }}><span style={{ fontFamily: 'cursive', color: 'darksalmon' }}>Life</span> is better</h1>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;