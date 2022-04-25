import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider_1 from '../../../images/h1-banner-1.jpg'
import slider_2 from '../../../images/Banner2.jpg'
import slider_3 from '../../../images/Banner3.jpg'
import './Slider.css'
import { Button } from 'bootstrap';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider_1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="slider-content">
                         <h3>Save 20% All Skin Care Product</h3>
                         <button className='btn btn-danger px-5 py-3 mt-4 rounded-pill'>Shop Now</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider_2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <div className="slider-content">
                         <h3>Save 30% All Medicine Product</h3>
                         <button className='btn btn-danger px-5 py-3 mt-4 rounded-pill'>Shop Now</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider_3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <div className="slider-content">
                         <h3>Buy Pharmacy Product in Chip Price</h3>
                         <button className='btn btn-danger px-5 py-3 mt-4 rounded-pill'>Shop Now</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;